'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Designers', [
      { name: 'Retrofete', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Balmain', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Valentino', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fendi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dior', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diptyque', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dolce & Gabbana', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gianvito Rossi', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Saint Laurent', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Self-Portrait', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Versace', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Zimmermann', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jonathan Simkhai', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mugler', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alexis', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alex Perry', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alexander Vauthier', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Koral', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Norma Kamali', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Balenciaga', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bottega Veneta', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Moussy Vintage', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Designers', null, {});
  }
};
