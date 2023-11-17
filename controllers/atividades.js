const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarAtividades(request, response) {
        try {
            const sql = 'SELECT atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id FROM ATIVIDADES;';
            const atividades = await db.query(sql);
            const nReg = atividades[0].length;
            return response.status(200).json(
                {confirma: 'Sucesso',
                message: 'Atividades cadastradas',
                nItens: nReg, 
                itens: atividades[0]
            }
        );
   } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
                  
    async cadastrarAtividades(request, response) {
        try {
            const {atv_dthr, atv_status, prod_id, usu_id, set_id} = request.body;
            const sql = 'INSERT INTO atividades (atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (?, ?, ?, ?, ?, ?) ;';
            const values = [atv_dthr, atv_status, prod_id, usu_id, set_id];
            const confirmacao = await db.query(sql,values);
            const atv_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de atividades concluido',
                 atv_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarAtividades(request, response) {
        try {
            const {atv_dthr, atv_status, prod_id, usu_id, set_id} = request.body;
            const{atv_id} = request.params;
            const sql = 'UPDATE atividades SET atv_dthr = ?, atv_status = ?, prod_id = ?, usu_id = ?, set_id = ? WHERE atv_id =?;';
            const values = [atv_dthr, atv_status, prod_id, usu_id, set_id];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Atividades ' + atv_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarAtividades(request, response) {
        try {
            const{atv_id} = request.params;
            const sql = 'DELETE FROM Atividades WHERE atv_id = ?;';
            const values = [atv_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Atividades com id ' + atv_id + ' excluido com sucesso'

                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};   
