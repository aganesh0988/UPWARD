const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Op } = require('sequelize')

const { Product, Designer, Category } = require('../../db/models');


router.get('/', asyncHandler(async function (_req, res) {
  const product = await Product.findAll(
    { include: [Designer, Category] }
  );
  res.json(product);
}));

router.get('/detail/:id', asyncHandler(async function (req, res) {
  const productDetail = await Product.findByPk(req.params.id);
  res.json(productDetail);
}));


router.get('/search/:searchString', asyncHandler(async function (req, res) {
  const { term } = req.query;
  const searchProduct = await Product.findAll({
    where: {
      name: {
        // [Op.or]: [].concat(req.query.name)
        [Op.iLike]: '%' + req.params.searchString + '%'
        // 'searchString'
      }
    }
  })
  res.json(searchProduct)
}))

module.exports = router;
