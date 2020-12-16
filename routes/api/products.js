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

// @bp.route('/search/<search_string>', methods = ["GET"])
// def search_route(search_string):
//     response = Dealership.query.filter(
//         Dealership.name.ilike(f'%{search_string}%')).limit(15)
//     return jsonify({'dealerships': [dealership.to_dict() for dealership in response]})


// router.get('/search/<search_string>', asyncHandler(async function (req, res) {
//   const searchProduct = await Product.findAll({
//     where: {
//       [Op.iLike]: 'search_string'
//     }
//   })
//   res.json(searchProduct)
// }))

module.exports = router;
