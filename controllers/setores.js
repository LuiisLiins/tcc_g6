const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarSetores(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Setores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarSetores(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Setores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarSetores(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Setores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarSetores(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Setores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
