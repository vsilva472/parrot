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
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default_avatar.png'
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default_cover.png'
    },
    posts_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    following_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    followers_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
      as: 'Following',
      through: models.Follower,
      foreignKey: 'follower_user_id',
      onDelete: 'CASCADE'
    });

    User.belongsToMany(models.User, {
      as: 'Followed',
      through: models.Follower,
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