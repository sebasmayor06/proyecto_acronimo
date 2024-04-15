const { Op } = require('sequelize');
const { busquedas } = require('../db');

const getBusquedas = async (req, res) => {
    try {
        const historial = await busquedas.findAll({
            where: {
                name_acronimo: {
                    [Op.not]: null
                }
            }
        });
        res.status(200).json(historial)

        return historial;
    } catch (error) {
        console.log(error);
        throw error; // Propaga el error para que el llamador lo maneje
    }
}

module.exports = getBusquedas
