const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Product, Designer, Category } = require('../../db/models');


router.get('/', asyncHandler(async function (_req, res) {
  const product = await Product.findAll(
    { include: [Designer, Category] }
  );
  res.json(product);
}));

module.exports = router;