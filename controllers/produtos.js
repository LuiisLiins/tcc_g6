const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'listar Produtos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async cadastrarProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Produtos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Produtos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarProdutos(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Produtos'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  
