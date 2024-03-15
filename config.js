const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    username: 'root',
    password: 'Enrico1803@',
    database: 'db_lista',
    host: 'localhost',
    dialect: 'mysql'
});