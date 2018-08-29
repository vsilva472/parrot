'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email em uso. Por favor, escolha outro.'
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Este nome já está em uso!'
      }
    },
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING,
    posts_count: DataTypes.INTEGER,
    following_count: DataTypes.INTEGER,
    followers_count: DataTypes.INTEGER,
    bio: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate : user => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( user.password, salt );
      }
    }
  });

  User.prototype.hasValidPassword = function ( password ) { 
    return bcrypt.compareSync(password, this.password);
  }

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });

    User.belongsToMany(models.User, {
      as: 'Follower',
      through: 'followers',
      foreignKey: 'follower_user_id',
      onDelete: 'CASCADE'
    });

    User.belongsToMany(models.User, {
      as: 'Followed',
      through: 'followers',
      foreignKey: 'followed_user_id',
      onDelete: 'CASCADE'
    });

    User.hasMany(models.Notification, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });

  };

  return User;
};