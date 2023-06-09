const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Animal = sequelize.define('Animal', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_dono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone_dono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },

})

module.exports = Animal