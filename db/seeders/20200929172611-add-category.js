'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { name: 'Accessories', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Activewear', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bags', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Denim', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dresses', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jackets & Coats', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jumpsuits & Rompers', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pants', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shoes', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shorts', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Skirts', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tops', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jewelry', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
