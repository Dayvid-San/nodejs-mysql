const Sequelize = require('sequelize');

// Conectando banco de dados
    const sequelize = new Sequelize('postapp', 'root', '1234dss', {
        host: 'localhost',
        dialect: 'mysql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}