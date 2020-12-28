const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { Product, Designer, Category } = require('../../db/models');



router.get('/', asyncHandler(async function (_req, res) {
  const category = await Category.findAll(
    // { include: [Designer, Product] }
  );
  res.json(category);
}));



module.exports = router;
