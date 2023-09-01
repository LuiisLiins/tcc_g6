-- USUARIOS "6"
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (1, 'Eduarda Agatha Rocha', 'edugatha', '123456', true);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (2, 'Ana Júlia Barissa Mendes', 'anamendes', '487239', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (3, 'Starlight White Diamond', 'wdkirida', '982401', true);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (4, 'Danielly Albuquerque', 'danizaoa', '659812', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (5, 'Daniele Barbosa Borges', 'danibb', '234318', false);
INSERT INTO USUARIOS (usu_id, usu_nome, usu_login, usu_senha, usu_adm) VALUES (6, 'Luis Felipi Lins', 'lulins', '001248', false);

-- SETORES "6"
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (1, 'setor 1', 'corredor 1');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (2, 'setor 2', 'corredor 2');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (3, 'setor 3', 'corredor 3');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (4, 'setor 4', 'corredor 4');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (5, 'setor 5', 'corredor 5');
INSERT INTO SETORES (set_id, set_nome, set_localizacao) VALUES (6, 'setor 6', 'corredor 6');

-- FORNECEDORES "6"
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (1, '99.716.562/0001-01', 'Lucas e Manoel Financeira Ltda', 'Lucas e Manoel Financeira Ltda', '(16) 99913-5866', '(16) 3580-2753', 'lucasemanoelfinanceiraltda@gmail.com', 'Franca');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (2, '68.520.543/0001-73', 'Danilo e Rafaela Casa Noturna Ltda', 'Danilo e Rafaela Casa Noturna Ltda', '(11) 98175-6790', '(11) 3780-9416', 'daniloerafaelacasanoturnaltda@gmail.com', 'Cajamar');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (3, '08.541.431/0001-77', 'Lavínia e Luana Transportes Ltda', 'Lavínia e Luana Transportes Ltda', '(11) 98378-9262', '(11) 3956-6572', 'lavíniaeluanatransportesltda@gmail.com', 'Poá');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (4, '55.953.762/0001-02', 'Nicole e Isis Corretores Associados ME', 'Nicole e Isis Corretores Associados ME', '(11) 98899-3756', '(11) 3877-3488', 'nicoleeisiscorretoresassociadosme@gmail.com', 'Santo André');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (5, '10.164.425/0001-90', 'Rebeca e Vera Filmagens Ltda', 'Rebeca e Vera Filmagens Ltda', '(11) 99640-3140', '(11) 2840-0436', 'rebecaeverafilmagensltda@gmail.com', 'Itapevi');
INSERT INTO FORNECEDORES (forn_id, forn_cnpj, forn_razao_social, forn_nome, forn_celular, forn_fixo, forn_email, forn_cidade) VALUES (6, '95.602.742/0001-01', 'Levi e Juliana Padaria ME', 'Levi e Juliana Padaria ME', '(19) 98844-8224', '(19) 2975-3571', 'leviejulianapadariame@gmail.com', 'Araras');

-- PRODUTOS "12"
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (1, 'Alface', 23.0, 4.75, 1);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (2, 'Arroz', 135.0, 80.0, 2);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (3, 'Batata', 25.0, 12.0, 3);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (4, 'Banana', 33.0, 23.0, 4);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (5, 'Carne Bovina', 59.5, 28.3, 5);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (6, 'Carne Suína', 50.0, 35.9, 6);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (7, 'Doce de Leite', 23.0, 12.0, 7);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (8, 'Frango', 78.0, 60.6, 8);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (9, 'Rúcula', 12.0, 3.8, 9);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (10, 'Sabonete', 30, 19, 10);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (11, 'Tomate', 80.0, 50.8, 11);
INSERT INTO PRODUTOS (prod_id, prod_nome, prod_estoque, prod_estoque_retirada, set_id) VALUES (12, 'Uva', 45.0, 17.0, 12);

-- FORNECEDORES_PRODUTO "20"
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 1);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 2);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (1, 3);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 4);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 5);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 6);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 7);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 8);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 9);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (4, 10);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (4, 11);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (4, 12);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (5, 1);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (5, 2);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (5, 3);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 1);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 2);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (6, 3);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (2, 2);
INSERT INTO FORNECEDORES_PRODUTO (forn_id, prod_id) VALUES (3, 3);

-- ATIVIDADES "8"																			
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (1, '2023-01-01', 0, 1, 1, 1);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (2, '2023-02-02', 1, 2, 2, 2);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (3, '2023-03-03', 2, 3, 2, 2);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (4, '2023-04-04', 1, 4, 3, 3);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (5, '2023-05-05', 2, 5, 4, 4);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (6, '2023-06-06', 0, 6, 5, 5);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (7, '2023-07-07', 1, 7, 6, 6);
INSERT INTO ATIVIDADES (atv_id, atv_dthr, atv_status, prod_id, usu_id, set_id) VALUES (8, '2023-08-08', 2, 8, 6, 7);

-- RETIRADAS_ESTOQUE "4"
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (1, 4.75, 1, 1);
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (2, 80.0, 2, 2);
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (3, 12.0, 3, 3);
INSERT INTO RETIRADAS_ESTOQUE (ret_id, ret_qtd, prod_id, atv_id) VALUES (4, 23.0, 4, 4);

