const {Sequelize} = require('sequelize')

const config = require('../config');

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host, // variable de entorno del host
    username: config.db.username, // variable de entorno del usuario
    password: config.db.password, // variable de entorno del contraseña
    database: config.db.name, // variable de entorno de la base de datos
});

module.exports = db;