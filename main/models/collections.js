const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import your Sequelize instance
const User = require('./User'); // Import the User model if needed
const BlogPost = require('./BlogPost'); // Import the BlogPost model if needed

const Collection = sequelize.define('Collection', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
// Associations
Collection.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Collection.hasMany(BlogPost, {
    foreignKey: 'collection_id',
    onDelete: 'CASCADE',
});

module.exports = Collection;
