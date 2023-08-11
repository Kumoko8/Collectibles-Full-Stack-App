const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import your Sequelize instance
const Collection = require('./Collection'); // Import the Collection model
const BlogPost = require('./BlogPost'); // Import the BlogPost model
const Comment = require('./Comment'); // Import the Comment model

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Associations
User.hasMany(Collection, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

module.exports = User;
