'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Gabrielle Robe Dress, Teal', designerId: 1, categoryId: 5,
        description: `Wrap front with velvet waist tie closure. Paillette sequin embellished fabric. Self & Lining: 100% viscose. Dry clean only. Made in India.`,
        image: 'retrofeteg.png', price: 635, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Club 1 Visor', designerId: 5, categoryId: 1,
        description: `100% acrylic. Made in Italy. Brim measures approx 3.25" in length. Adjustable logo webbing elasticized band`,
        image: 'DiorVisor.png', price: 635, size: 'One Size', review: 'must have for Summer', createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
