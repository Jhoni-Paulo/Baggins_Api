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
        },
        idContato: {
          type: Sequelize.INTEGER ,
          allowNull: false,
        },
        senhaHash: {
          type: Sequelize.STRING ,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Pessoas');
  }
};
