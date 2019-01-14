const Sequelize  = require('sequelize');
const sequelize = new Sequelize('express', 'root', 'victory', {
    host: 'db',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = {
    Sequelize,
    sequelize
}