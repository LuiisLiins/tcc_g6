const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarProdutos(request, response) {
        try {
            const sql = 'SELECT prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id FROM PRODUTOS;';
            const PRODUTOS = await db.query(sql);
            const nReg = PRODUTOS[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Produtos casdastradas',
                nItens: nReg, 
                itens: PRODUTOS[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
     
    async cadastrarProdutos(request, response) {
        try {
            const {prod_nome, prod_estoque, prod_estoque_retirada, set_id} = request.body;
            const sql = 'INSERT INTO PRODUTOS (prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (?, ?, ?, ?) ;';
            const values = [prod_nome, prod_estoque, prod_estoque_retirada, set_id];
            const confirmacao = await db.query(sql,values);
            const prod_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de Produtos concluido',
                 prod_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },  

    async editarProdutos(request, response) {
        try {
            const {prod_nome, prod_estoque, prod_estoque_retirada, set_id} = request.body;
            const{prod_id} = request.params;
            const sql = 'UPDATE PRODUTOS SET prod_nome = ?, prod_estoque = ?, prod_estoque_retirada = ?, set_id = ? WHERE prod_id = ?;';
            const values = [prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Produtos' + prod_id + "atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarProdutos(request, response) {
        try {
            const{prod_id} = request.params;
            const sql = 'DELETE FROM PRODUTOS WHERE prod_id = ?';
            const values = [prod_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Produto com id ' + prod_id + 'excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  

