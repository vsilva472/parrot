'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    follower_user_id: DataTypes.INTEGER,
    followed_user_id: DataTypes.INTEGER
  }, {});

  return Follower;
};