const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarRetiradasEstoque(request, response) {
        try {
            const sql = 'SELECT ret_id, ret_qtd, prod_id, atv_id FROM RETIRADAS_ESTOQUE;';
            const retiradasEstoque = await db.query(sql);
            const nReg = retiradasEstoque[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Retirada de Estoque casdastradas',
                nItens: nReg, 
                itens: retiradasEstoque[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarRetiradasEstoque(request, response) {
        try {
            const {ret_qtd, prod_id, atv_id} = request.body;
            const sql = 'INSERT INTO RETIRADAS_ESTOQUE (ret_qtd, prod_id, atv_id) VALUES (?, ?, ?) ;';
            const values = [ret_qtd, prod_id, atv_id];

            const confirmacao = await db.query(sql,values);
            const ret_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',

                 message:  'cadastro de Retirada de estoque concluido',
                 ret_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarRetiradasEstoque(request, response) {
        try {
            const {ret_qtd, prod_id, atv_id} = request.body;
            const{ret_id} = request.params;
            const sql = 'UPDATE RETIRADAS_ESTOQUE SET ret_qtd = ?, prod_id = ?, atv_id = ? WHERE ret_id = ?;';
            const values = [ret_qtd, prod_id, atv_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Retirada Estoque ' + ret_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarRetiradasEstoque(request, response) {
        try {
            const{ret_id} = request.params;
            const sql = 'DELETE FROM RETIRADAS_ESTOQUE WHERE ret_id = ?;';
            const values = [ret_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Retirada com id ' + ret_id + ' excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
