const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarProdutos(request, response) {
        try {
            const sql = 'SELECT prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id FROM PRODUTOS;';
            const produtos = await db.query(sql); 
            return response.status(200).json({confirma: produtos[0]});
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
