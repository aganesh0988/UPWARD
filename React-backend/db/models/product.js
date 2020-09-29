'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    designerId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    size: DataTypes.STRING,
    review: DataTypes.STRING
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
    Product.belongsTo(models.Designer, { foreignKey: 'designerId' });
    Product.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return Product;
};
