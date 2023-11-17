const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_login, usu_senha, usu_adm FROM USUARIOS;';
            const Usuarios = await db.query(sql);
            const nReg = Usuarios[0].length;
            return response.status(200).json(
                {
                confirma:  'Sucesso',
                message: 'Usuarios casdastradas',
                nItens: nReg, 
                itens: Usuarios[0]
            }
        );
    } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async cadastrarUsuarios(request, response) {
        try {
            const { usu_nome, usu_login, usu_senha, usu_adm} = request.body;
            const sql = 'INSERT INTO USUARIOS ( usu_nome, usu_login, usu_senha, usu_adm) VALUES (?, ?, ?, ?) ;';
            const values = [ usu_nome, usu_login, usu_senha, usu_adm];
            const confirmacao = await db.query(sql,values);
            const usu_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de Usuarios concluido',
                 usu_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    
    async editarUsuarios(request, response) {
        try {
            const { usu_nome, usu_login, usu_senha, usu_adm} = request.body;
            const{usu_id} = request.params;
            const sql = 'UPDATE USUARIOS SET usu_nome = ?, usu_login = ?, usu_senha = ?, usu_adm = ? WHERE usu_id = ?;';
            const values = [usu_id, usu_nome, usu_login, usu_senha, usu_adm];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Usuarios' + usu_id + "atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarUsuarios(request, response) {
        try {
            const{usu_id} = request.params;
            const sql = 'DELETE FROM PRODUTOS WHERE usu_id = ?;';
            const values = [usu_id];
            await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message:'Usuario com id ' + ret_id + 'excluído com sucesso'
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
