const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarFornecedores(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Fornecedores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarFornecedores(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Fornecedores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async editarFornecedores(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Fornecedores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarFornecedores(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Fornecedores'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
