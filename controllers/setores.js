const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarSetores(request, response) {
        try {
            const sql = 'SELECT set_id, set_nome, set_localizacao FROM SETORES;';
            const Setores = await db.query(sql);
            const nReg = Setores[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Setores casdastradas',
                nItens: nReg, 
                itens: Setores[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async cadastrarSetores(request, response) {
        try {
            const {set_nome, set_localizacao} = request.body;
            const sql = 'INSERT INTO SETORES ( set_nome, set_localizacao) VALUES (?, ?) ;';
            const values = [ set_nome, set_localizacao];
            const confirmacao = await db.query(sql,values);
            const set_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de Setores concluido',
                 set_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarSetores(request, response) {
        try {
            const {set_nome, set_localizacao} = request.body;
            const{set_id} = request.params;
            const sql = 'UPDATE SETORES SET set_nome = ?, set_localizacao = ? WHERE set_id =?;';
            const values = [set_id, set_nome, set_localizacao];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Setores' + set_id + "atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarSetores(request, response) {
        try {
            const{set_id} = request.params;
            const sql = 'DELETE FROM SETORES WHERE set_id = ?;';
            const values = [set_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Setores com id ' + set_id + 'excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
