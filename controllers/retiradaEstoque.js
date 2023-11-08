const { json } = require('express'); 
const db = require('../database/connection'); 
const atividades = require('./atividades');

module.exports = {
    async listarRetiradaEstoque(request, response) {
        try {
            const sql = 'SELECT ret_id, ret_qtd, prod_id, atv_id FROM RETIRADAS_ESTOQUE;';
            const retiradaEstoque = await db.query(sql);
            const nReg = retiradaEstoque[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Retirada de Estoque casdastradas',
                nItens: nReg, 
                itens: retiradaEstoque[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarRetiradaEstoque(request, response) {
        try {
            const {ret_qtd, prod_id, atv_id} = request.body;
            const sql = 'INSERT INTO retiradas_Estoque (ret_id, ret_qtd, prod_id, atv_id) VALUES (?, ?, ?, ?) ;';
            const values = [retiradas_estoqueatv_dthr, atv_status, prod_id, usu_id, set_id];
            const confirmacao = await db.query(sql,values);
            const ret_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message: 'Retirada Estoque cadastradas',
                 ret_id
            }
        );
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
