const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarAtividades(request, response) {
        try {
            const sql = 'SELECT atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id FROM ATIVIDADES;';
            const atividades = await db.query(sql);
            const nReg = atividades[0].lenght;
            return response.status(200).json({confirma: 'Sucesso', 'nItens': nReg, 'itens': atividades[0]});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
                  
    async cadastrarAtividades(request, response) {
        try {
            return response.status(200).json({confirma: 'cadastrar atividades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarAtividades(request, response) {
        try {
            return response.status(200).json({confirma: 'editar atividades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarAtividades(request, response) {
        try {
            return response.status(200).json({confirma: 'apagar atividades'});
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
};  

