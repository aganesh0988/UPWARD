const express = require('express');
const asyncHandler = require('express-async-handler');
const { jwtConfig } = require('../../config/index');

const { User } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async function (req, res, next) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !user.isValidPassword(password)) {
    const err = new Error('Login failed');
    err.status = 401;
    err.title = 'Login failed';
    err.errors = ['Invalid credentials'];
    return next(err);
  }

  const data = user.toSafeObject();
  const token = jwt.sign({ data }, jwtConfig.secret, { expiresIn: Number.parseInt(jwtConfig.expiresIn) })
  res.cookie('token', token);
  res.json({ token, user: data });

}));

module.exports = router;
