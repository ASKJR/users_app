'use strict';
const db = require('../database/db');
const User = db.sequelize.define('User', {
    firstName: db.Sequelize.STRING,
    lastName: db.Sequelize.STRING,
    email: db.Sequelize.STRING,
    createdAt: {
        type: db.Sequelize.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: db.Sequelize.DATE,
        defaultValue: new Date()
    }
});
module.exports = User;