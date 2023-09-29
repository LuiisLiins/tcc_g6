const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRetiradaEstoque(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Retirada Estoque'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarRetiradaEstoque(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Retirada Estoque'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarRetiradaEstoque(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Retirada Estoque'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarRetiradaEstoque(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Retirada Estoque'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
