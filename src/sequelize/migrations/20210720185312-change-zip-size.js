'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('addresses', 'zip', { 
      type: Sequelize.DataTypes.STRING(40)
    });
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.changeColumn('addresses', 'zip', {
        type: Sequelize.DataTypes.STRING
      });
  }
};
