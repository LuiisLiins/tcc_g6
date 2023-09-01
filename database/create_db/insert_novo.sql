-- USUARIOS "6"
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (1, 'Eduarda Agatha Rocha', 'edugatha', '123456', true);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (2, 'Ana Júlia Barissa Mendes', 'anamendes', '487239', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (3, 'Starlight White Diamond', 'wdkirida', '982401', true);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (4, 'Danielly Albuquerque', 'danizaoa', '659812', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (5, 'Daniele Barbosa Borges', 'danibb', '234318', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (6, 'Luis Felipi Lins', 'lulins', '001248', false);

-- SETORES "6"
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (1, 'Frios e laticínios', 'corredor 1');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (2, 'Adega e bebidas', 'corredor 2');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (3, 'Higiene e beleza', 'corredor 3');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (4, 'Limpeza', 'corredor 4');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (5, 'Hortifrúti', 'corredor 5');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (6, 'Biscoitos e doces', 'corredor 6'); 
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (7, 'Grãos e cereais', 'corredor 7'); 


-- FORNECEDORES "6"
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (1, '99.716.562/0001-01', 'Lucas e Manoel Cereais Ltda', 'Lucas e Manoel Cereais Ltda', '(16)99913-5866', '(16)3580-2753', 'lucasemanoelcereaisltda@gmail.com', 'Franca');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (2, '68.520.543/0001-73', 'Danilo e Rafaela da Horta Ltda', 'Danilo e Rafaela da Horta Ltda', '(11)98175-6790', '(11)3780-9416', 'daniloerafaelahrtltda@gmail.com', 'Cajamar');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (3, '08.541.431/0001-77', 'Lavínia e Luana com Fruta Ltda', 'Lavínia e Luana com Fruta Ltda', '(11)98378-9262', '(11)3956-6572', 'comfruta@gmail.com', 'Poá');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (4, '55.953.762/0001-02', 'Nicole e Isis Galináceos ME', 'Nicole e Isis Galináceos ME', '(11)98899-3756', '(11)3877-3488', 'nicoleeisis@gmail.com', 'Santo André');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (5, '10.164.425/0001-90', 'Rebeca e Vera Cuidados Pessoais Ltda', 'Rebeca e Vera Cuidados Pessoais Ltda', '(11)99640-3140', '(11)2840-0436', 'rebecaeveraltda@gmail.com', 'Itapevi');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (6, '95.602.742/0001-01', 'Levi e Juliana Distribuídora ME', 'Levi e Juliana Distribuídora ME', '(19)98844-8224', '(19)2975-3571', 'leviejulianaDistribuídora@gmail.com', 'Araras');

-- PRODUTOS "12"
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (1, 'Alface', 23.0, 10.0, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (2, 'Arroz', 135.0, 80.0, 7);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (3, 'Batata', 25.0, 12.0, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (4, 'Banana', 33.0, 23.0, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (5, 'Feijão', 59.0, 28.0, 7);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (6, 'Milho', 50.0, 35.0, 7);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (7, 'Doce de Leite', 23.0, 12.0, 6);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (8, 'Frango', 78.0, 60.6, 1);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (9, 'Rúcula', 12.0, 3.8, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (10, 'Sabonete', 30, 19, 4);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (11, 'Tomate', 80.0, 50.8, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (12, 'Uva', 45.0, 17.0, 5);

-- FORNECEDORES_PRODUTO "20"
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 2);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 5);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 6);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 1);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 3);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 9);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 10);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 4);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 11);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 12);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (4, 8);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (5, 10);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 7);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 10);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 5);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 6);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 2);


-- ATIVIDADE_TIPOS
INSERT INTO ATIVIDADE_TIPOS (atv_tp_id, atv_tp_tipo) VALUES (1, 'Reposição');
INSERT INTO ATIVIDADE_TIPOS (atv_tp_id, atv_tp_tipo) VALUES (2, 'Limpeza'); 
INSERT INTO ATIVIDADE_TIPOS (atv_tp_id, atv_tp_tipo) VALUES (3, 'Alteração de preço'); 

-- ATIVIDADES "8"					atv_status: 0 alerta criado, 1, recebido, 2 concluído													
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (1, '2023-08-01 12:00', 2, null, 3, 1, 2);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (2, '2023-08-01 14:15', 2, 3, 3, 5, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (3, '2023-08-01 15:15', 2, 6, 3, 7, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (4, '2023-08-01 16:15', 2, 7, 3, 4, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (5, '2023-08-01 17:00', 2, 7, 3, 6, 3);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (6, '2023-08-02 08:00', 1, null, 4, 1, 2);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (7, '2023-08-02 09:00', 1, 10, 4, 4, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (8, '2023-08-02 10:00', 1, 11, 4, 5, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (9, '2023-08-02 12:00', 0, 12, null, 5, 1); -- Gerado ou não pelo sistema
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id, atv_tp_id) VALUES (10, '2023-08-02 12:00', 0, null, 4, 2, 3);

-- RETIRADAS_ESTOQUE "4"
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (1, 5, 3, 2);
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (2, 10, 6, 3);
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (3, 22, 7, 4);
