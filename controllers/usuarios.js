// Importa o middleware 'json' do Express para lidar com dados JSON nas solicitações e respostas
const { json } = require('express'); 

// Importa o módulo responsável pela conexão com o banco de dados
const db = require('../database/connection'); 

// Exporta um objeto contendo várias funções relacionadas à manipulação de usuários
module.exports = {
    // Função assíncrona para listar usuários
    async listarUsuarios(request, response) {
        try {
            // Consulta SQL para selecionar informações dos usuários
            const sql = 'SELECT usu_id, usu_nome, usu_login, usu_senha, usu_adm FROM USUARIOS;';

            // Executa a consulta no banco de dados
            const Usuarios = await db.query(sql);

            // Calcula o número de registros retornados
            const nReg = Usuarios[0].length;

            // Retorna uma resposta JSON com informações sobre os usuários
            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Usuários cadastrados',
                nItens: nReg, 
                itens: Usuarios[0]
            });
        } catch (error) {
            // Retorna uma resposta de erro caso ocorra uma exceção
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    // Função assíncrona para cadastrar um novo usuário
    async cadastrarUsuarios(request, response) {
        try {
            // Extrai os dados do corpo da solicitação
            const { usu_nome, usu_login, usu_senha, usu_adm } = request.body;

            // Consulta SQL para inserir um novo usuário no banco de dados
            const sql = 'INSERT INTO USUARIOS (usu_nome, usu_login, usu_senha, usu_adm) VALUES (?, ?, ?, ?);';

            // Valores a serem inseridos na consulta
            const values = [usu_nome, usu_login, usu_senha, usu_adm];

            // Executa a consulta no banco de dados e obtém o ID do usuário recém-criado
            const confirmacao = await db.query(sql, values);
            const usu_id = confirmacao[0].insertId;

            // Retorna uma resposta JSON confirmando o sucesso do cadastro
            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Cadastro de usuário concluído',
                usu_id
            });
        } catch (error) {
            // Retorna uma resposta de erro caso ocorra uma exceção
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    }, 
    
    // Função assíncrona para editar informações de um usuário
    async editarUsuarios(request, response) {
        try {
            // Extrai os dados do corpo da solicitação e os parâmetros da URL
            const { usu_nome, usu_login, usu_senha, usu_adm } = request.body;
            const { usu_id } = request.params;

            // Consulta SQL para atualizar informações do usuário com base no ID
            const sql = 'UPDATE USUARIOS SET usu_nome = ?, usu_login = ?, usu_senha = ?, usu_adm = ? WHERE usu_id = ?;';
            
            // Valores a serem atualizados na consulta
            const values = [usu_nome, usu_login, usu_senha, usu_adm, usu_id];

            // Executa a consulta no banco de dados e obtém o número de registros atualizados
            const atualizacao = await db.query(sql, values);

            // Retorna uma resposta JSON confirmando o sucesso da atualização
            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Usuário ' + usu_id + ' atualizado com sucesso!',
                registrosAtualizados: atualizacao[0].affectedRows
            });
        } catch (error) {
            // Retorna uma resposta de erro caso ocorra uma exceção
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },

    // Função assíncrona para apagar um usuário
    async apagarUsuarios(request, response) {
        try {
            // Extrai o parâmetro da URL (usu_id)
            const { usu_id } = request.params;

            // Consulta SQL para excluir um usuário com base no ID
            const sql = 'DELETE FROM Usuarios WHERE usu_id = ?;';

            // Valor a ser usado na consulta de exclusão
            const values = [usu_id];

            // Executa a consulta no banco de dados para excluir o usuário
            await db.query(sql, values);

            // Retorna uma resposta JSON confirmando o sucesso da exclusão
            return response.status(200).json({
                confirma: 'Sucesso',
                message: 'Usuário com ID ' + usu_id + ' excluído com sucesso'
            });
        } catch (error) {
            // Retorna uma resposta de erro caso ocorra uma exceção
            return response.status(500).json({ confirma: 'Erro', message: error });
        }
    },
};
