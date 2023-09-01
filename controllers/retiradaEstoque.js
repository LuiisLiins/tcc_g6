const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRetiradeEstoque(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Retirada Estoque'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  
