const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = User;