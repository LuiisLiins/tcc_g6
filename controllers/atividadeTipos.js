const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarAtividadeTipos(request, response) {
        try {
            const sql = 'SELECT atv_tp_id, atv_tp_tipo FROM ATIVIDADE_TIPOS;';
            const atividades_Tipos = await db.query(sql);
            const nReg = atividades_Tipos[0].length;
            return response.status(200).json(
                {confirma: 'Sucesso',
                message: 'Tipos de Atividade cadastradas',
                nItens: nReg, 
                itens: atividades_Tipos[0]
            }
        );
   } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
                  
    async cadastrarAtividadeTipos(request, response) {
        try {
            const {atv_tp_tipo} = request.body;
            const sql = 'INSERT INTO atividades_tipos (atv_tp_tipo) VALUES (?) ;';
            const values = [atv_tp_tipo];
            const confirmacao = await db.query(sql,values);
            const atv_tp_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de tipos de atividade concluido',
                 atv_tp_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarAtividadeTipos(request, response) {
        try {
            const {atv_tp_id, atv_tp_tipo} = request.body;
            const{atv_id} = request.params;
            const sql = 'UPDATE Atividades_tipos SET atv_tp_tipo = ? WHERE atv_tp_id, = ?;';
            const values = [atv_tp_tipo];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Atividades ' + atv_tp_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarAtividadeTipos(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar atividades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  