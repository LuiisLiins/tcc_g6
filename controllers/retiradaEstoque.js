const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRetiradaEstoque(request, response) {
        try {
            const sql = 'SELECT ret_id, ret_qtd, prod_id, atv_id FROM RETIRADAS_ESTOQUE;';
            const retiradaEstoque = await db.query(sql);
            return response.status(200).json({confirma:  retiradaEstoque[0]});
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
