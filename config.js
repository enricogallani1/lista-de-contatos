const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    username: 'root',
    password: 'ohpf20xpd',
    database: 'db_lista',
    host: 'localhost',
    dialect: 'mysql'
});