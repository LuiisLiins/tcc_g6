const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarFornecedoresProduto(request, response) {
        try {
            const sql = 'SELECT forn_id, prod_id FROM fornecedores_produto;';
            const Fornecedores_produto = await db.query(sql);
            const nReg = Fornecedores_produto[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Fornecedores produto casdastradas',
                nItens: nReg, 
                itens: Fornecedores_produto[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarFornecedoresProduto(request, response) {
        try {
            const { forn_id, prod_id } = request.body;
            const sql = 'INSERT INTO fornecedores_produto (forn_id, prod_id) VALUES (?, ?) ;';
            const values = [forn_id, prod_id];
            const confirmacao = await db.query(sql,values);           

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de Fornecedores produto concluido',
                 forn_id, 
                 prod_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarFornecedoresProduto(request, response) {
        try {
            const{forn_id, prod_id} = request.params;
            const sql = 'DELETE FROM fornecedores_produto WHERE forn_id = ? AND prod_id = ?;';
            const values = [forn_id, prod_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Produto com id ' + prod_id + ' excluído com sucesso do fornecedor' + forn_id
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error.message});
        }
    },
};  
