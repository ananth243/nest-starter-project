'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Settings',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        data_type: {
          allowNull: false,
          type: Sequelize.ENUM('number', 'string', 'object', 'boolean'),
        },
        account_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Accounts',
            key: 'id',
          },
        },
        value: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          unique_tag: {
            customIndex: true,
            fields: ['account_id', 'name'],
          },
        },
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Settings');
  },
};
