'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    notification: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    from_user_id: DataTypes.INTEGER
  }, {});

  Notification.associate = function(models) {
    Notification.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
  };

  return Notification;
};