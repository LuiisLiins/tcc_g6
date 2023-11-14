const { json } = require('express'); 
const db = require('../database/connection'); 

module.exports = {
    async listarFornecedores(request, response) {
        try {
            const sql = 'SELECT forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade FROM FORNECEDORES;';
            const fornecedores = await db.query(sql);
            const nReg = fornecedores[0].length;
            return response.status(200).json(
                {confirma: 'Sucesso',
                message: 'fornecedores cadastradas',
                nItens: nReg, 
                itens: fornecedores[0]
            }
        );
   } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 
    
    async cadastrarFornecedores(request, response) {
        try {
            const {forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade} = request.body;
            const sql = 'INSERT INTO Fornecedores (forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (?, ?, ?, ?, ?, ?, ?) ;';
            const values = [forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade];
            const confirmacao = await db.query(sql,values);
            const forn_id = confirmacao[0].insertId;

            return response.status(200).json(
                {confirma: 'Sucesso',
                 message:  'cadastro de fornecedores concluido',
                 forn_id
                });
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async editarFornecedores(request, response) {
        try {
            const {forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade} = request.body;
            const{forn_id} = request.params;
            const sql = 'UPDATE Fornecedores SET forn_cnpj = ?, forn_razao_social = ?, forn_nome = ?, forn_celular = ?, forn_fixo = ?, forn_email = ?, forn_cidade = ? WHERE forn_id = ?;';
            const values = [forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade];
            const atualizacao = await db.query(sql, values);

            return response.status(200).json(
                {
                    confirma: 'Sucesso',
                    message: 'Fornecedores ' + forn_id + " atualizado com sucesso!",
                    registrosAtualizados: atualizacao[0].affectedRows
                }
            );
        } catch (error) {
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    }, 

    async apagarFornecedores(request, response) {
        try {
            const{forn_id} = request.params;
            const sql = 'DELETE FROM Fornecedores WHERE forn_id = ?;';
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

  
