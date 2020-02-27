'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('People', { 
        id: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING ,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING ,
          allowNull: false,
          unique: true
        },
        idPersonType: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          defaultValue: 0
        },
        idContact: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          defaultValue: 0
        },
        passwordHash: {
          type: Sequelize.STRING ,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('People');
  }
};
