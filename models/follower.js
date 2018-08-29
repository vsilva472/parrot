'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    follower_user_id: DataTypes.INTEGER,
    followed_user_id: DataTypes.INTEGER
  }, {});

  return Follower;
};