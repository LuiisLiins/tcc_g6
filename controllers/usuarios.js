const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = 'SELECT usu_id, usu_nome, usu_login, usu_senha, usu_adm = 1 as usu_adm FROM USUARIOS;';
            const usuarios = await db.query(sql); 
            return response.status(200).json({confirma: usuarios[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    async cadastrarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
    
    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'editar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar Usuarios'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },
};  
