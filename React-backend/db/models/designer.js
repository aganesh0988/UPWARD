'use strict';
module.exports = (sequelize, DataTypes) => {
  const Designer = sequelize.define('Designer', {
    name: DataTypes.STRING,
  }, {});
  Designer.associate = function (models) {
    // associations can be defined here
    Designer.hasMany(models.Product, { foreignKey: 'productId' });
  };
  return Designer;
};
