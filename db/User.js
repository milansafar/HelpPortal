const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./db')

class User extends Model {}

User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize, modelName: 'user'
});

//TODO: check if this is needed in all modules?
sequelize.sync();

module.exports = User;