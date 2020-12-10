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

router.get('/detail/:id', asyncHandler(async function (req, res) {
  console.log("BACCCKKKKK1")
  console.log("BACCCKKKKK2", Product)
  console.log("REQPARAMMMMMMMM", req.params.id)
  const productDetail = await Product.findByPk(req.params.id);
  res.json(productDetail);
}));

module.exports = router;
