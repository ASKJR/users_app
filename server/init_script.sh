#!/bin/bash

sequelize db:migration

sequelize db:seed:all

node index.js