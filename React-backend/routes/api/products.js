const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Product, Designer, Category } = require('../../db/models');




/*
1. define backend endpoint (this file)
2. create/go to products.js in store, in there create action type, actions creator, and thunk. the three in the pokemon js
3. call get products function from react component
*/

router.get('/', asyncHandler(async function (_req, res) {
  const product = await Product.findAll(
    { include: [Designer, Category] }
  );
  res.json(product);
}));

module.exports = router;
