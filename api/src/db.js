require('dotenv').config();
const acronimosModel = require ('./models/acronimos')
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env


const {Sequelize} = require('sequelize');


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging:false});

acronimosModel(database)


module.exports = {database, ...database.models}