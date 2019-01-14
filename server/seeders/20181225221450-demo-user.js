'use strict';
var faker = require('faker');

const randomData = (rows) => {
    let data = [];
    for (let index = 0; index < rows; index++) {
        let firstName = faker.name.firstName();
        let lastName  = faker.name.lastName();
        let email     = faker.internet.email();
        data.push({
            firstName,
            lastName,
            email,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
    return data;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', randomData(100), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};