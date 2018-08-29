'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Notifications', 
      { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        from_user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Users',
            key: 'id'
          }
        },
        notification:  {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('notifications');
  }
};
