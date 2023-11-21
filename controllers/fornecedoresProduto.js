const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarFornecedoresProduto(request, response) {
        try {
            const sql = 'SELECT forn_id, prod_id FROM Fornecedores_produto;';
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
            const { prod_id} = request.body;
            const sql = 'INSERT INTO Fornecedores_produto (prod_id) VALUES (?) ;';
            const values = [prod_id];
            const confirmacao = await db.query(sql,values);
            const forn_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de Fornecedores produto concluido',
                 forn_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarFornecedoresProduto(request, response) {
        try {
            const {prod_id} = request.body;
            const{forn_id} = request.params;
            const sql = 'UPDATE Fornecedores_produto SET prod_id = ? WHERE forn_id = ?;';
            const values = [forn_id, prod_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Fornecedor Produto' + forn_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarFornecedoresProduto(request, response) {
        try {
            const{forn_id} = request.params;
            const sql = 'DELETE FROM Fornecedores_produto WHERE forn_id = ?;';
            const values = [forn_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Fornecedor com id ' + forn_id + ' excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
}; 