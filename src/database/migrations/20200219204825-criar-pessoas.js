'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Pessoas', { 
        id: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING ,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING ,
          allowNull: false,
          unique: true
        },
        idTipoPessoa: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          defaultValue: 0
        },
        idContato: {
          type: Sequelize.INTEGER ,
          allowNull: false,
          defaultValue: 0
        },
        senhaHash: {
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
      return queryInterface.dropTable('Pessoas');
  }
};
