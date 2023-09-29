const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
