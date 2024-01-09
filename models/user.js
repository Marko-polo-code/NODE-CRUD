const sequelize = require('sequelize');
const db = require('./util/database');

const User = db.define('user', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: sequelize.STRING,
  email: sequelize.STRING,
})

module.exports('User');
