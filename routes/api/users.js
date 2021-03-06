// const express = require('express');
// const asyncHandler = require('express-async-handler');

// const { User } = require('../../db/models');

// const router = express.Router();

// router.get('/', asyncHandler(async function (req, res, next) {
//     const users = await User.findAll();
//     res.json({ users });
// }));

// module.exports = router;


const express = require('express');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../../config');
const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { secret, expiresIn } = jwtConfig;
//const { validateEmailAndPassword } = require('../../utils');

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    return res.json({ users });
}));

router.post(
    '/token',
    // validateEmailAndPassword,
    asyncHandler(async function (req, res, next) {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email },
        });
        if (!user || !user.validatePassword(password)) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid'];
            return next(err);
        }
        const userDataForToken = {
            id: user.id,
            email: user.email,
        };
        // Create the token.
        const token = jwt.sign({ data: userDataForToken }, secret, {
            expiresIn: parseInt(expiresIn, 10),
        });
        res.json({ token, user: { id: user.id } });
    })
);

router.post(
    "/signup",
    asyncHandler(async function (req, res, next) {
        const { email, password, username } = req.body;
        const hashedPassword = await bcrypt.hashSync(password, 10);
        const user = await User.create({
            email,
            username,
            hashedPassword,
        });
        const token = {
            id: user.id,
            email: user.email,
        };
        res.status(201).json({
            user: { id: user.id },
            token,
        });
    })
);


module.exports = router;
