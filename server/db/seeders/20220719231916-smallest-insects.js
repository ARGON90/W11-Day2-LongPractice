'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Insects', [
      {name: 'Jalapeno', millimeters: 888},
      {name: 'Chicken', millimeters: 888},
      {name: 'Turkey', millimeters: 888},
      {name: 'Cauliflower', millimeters: 888},
      {name: 'Corn', millimeters: 888},
      {name: 'Adobo', millimeters: 888},
      {name: 'Macaroni', millimeters: 888},
      {name: 'Cheese', millimeters: 888},
      {name: 'Alcohol', millimeters: 888},
      {name: 'Peppers', millimeters: 888}
       ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Insects', {name: ['Chicken']});
  }
};
