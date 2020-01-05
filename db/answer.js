const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('./db')

class Answer extends Model {}

Answer.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize, modelName: 'answer'
});

sequelize.sync();

module.exports = Answer;