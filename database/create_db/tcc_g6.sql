CREATE TABLE `PRODUTOS` (
	`prod_id` int NOT NULL AUTO_INCREMENT,
	`prod_nome` varchar(64) NOT NULL,
	`prod_estoque` DECIMAL(5,2) NOT NULL,
	`prod_estoque_retirada` DECIMAL(5,2) NOT NULL,
	`set_id` INT NOT NULL,
	PRIMARY KEY (`prod_id`)
);

CREATE TABLE `FORNECEDORES` (
	`forn_id` int NOT NULL AUTO_INCREMENT,
	`forn_cnpj` char(18) NOT NULL,
	`forn_razao_social` varchar(128) NOT NULL,
	`forn_nome` varchar(64) NOT NULL,
	`forn_celular` char(14) NOT NULL,
	`forn_fixo` char(13),
	`forn_email` varchar(128) NOT NULL,
	`forn_cidade` varchar(64) NOT NULL,
	PRIMARY KEY (`forn_id`)
);

CREATE TABLE `USUARIOS` (
	`usu_id` INT NOT NULL AUTO_INCREMENT,
	`usu_nome` varchar(64) NOT NULL,
	`usu_login` varchar(32) NOT NULL,
	`usu_senha` varchar(128) NOT NULL,
	`usu_adm` bit NOT NULL,
	PRIMARY KEY (`usu_id`)
);

CREATE TABLE `FORNECEDORES_PRODUTO` (
	`forn_id` INT NOT NULL,
	`prod_id` INT NOT NULL,
	PRIMARY KEY (`forn_id`,`prod_id`)
);

CREATE TABLE `RETIRADAS_ESTOQUE` (
	`ret_id` int NOT NULL AUTO_INCREMENT,
	`ret_qtd` DECIMAL(5,2) NOT NULL,
	`prod_id` int NOT NULL,
	`atv_id` int NOT NULL,
	PRIMARY KEY (`ret_id`)
);

CREATE TABLE `ATIVIDADES` (
	`atv_id` INT NOT NULL AUTO_INCREMENT,
	`atv_dthr` DATETIME NOT NULL,
	`atv_status` tinyint NOT NULL,
	`prod_id` INT,
	`usu_id` INT,
	`set_id` INT NOT NULL,
	`atv_tp_id` smallint NOT NULL,
	PRIMARY KEY (`atv_id`)
);

CREATE TABLE `SETORES` (
	`set_id` int NOT NULL AUTO_INCREMENT,
	`set_nome` varchar(32) NOT NULL,
	`set_localizacao` varchar(32) NOT NULL,
	PRIMARY KEY (`set_id`)
);

CREATE TABLE `ATIVIDADE_TIPOS` (
	`atv_tp_id` smallint NOT NULL AUTO_INCREMENT,
	`atv_tp_tipo` varchar(64) NOT NULL,
	PRIMARY KEY (`atv_tp_id`)
);

ALTER TABLE `PRODUTOS` ADD CONSTRAINT `PRODUTOS_fk0` FOREIGN KEY (`set_id`) REFERENCES `SETORES`(`set_id`);

ALTER TABLE `FORNECEDORES_PRODUTO` ADD CONSTRAINT `FORNECEDORES_PRODUTO_fk0` FOREIGN KEY (`forn_id`) REFERENCES `FORNECEDORES`(`forn_id`);

ALTER TABLE `FORNECEDORES_PRODUTO` ADD CONSTRAINT `FORNECEDORES_PRODUTO_fk1` FOREIGN KEY (`prod_id`) REFERENCES `PRODUTOS`(`prod_id`);

ALTER TABLE `RETIRADAS_ESTOQUE` ADD CONSTRAINT `RETIRADAS_ESTOQUE_fk0` FOREIGN KEY (`prod_id`) REFERENCES `PRODUTOS`(`prod_id`);

ALTER TABLE `RETIRADAS_ESTOQUE` ADD CONSTRAINT `RETIRADAS_ESTOQUE_fk1` FOREIGN KEY (`atv_id`) REFERENCES `ATIVIDADES`(`atv_id`);

ALTER TABLE `ATIVIDADES` ADD CONSTRAINT `ATIVIDADES_fk0` FOREIGN KEY (`prod_id`) REFERENCES `PRODUTOS`(`prod_id`);

ALTER TABLE `ATIVIDADES` ADD CONSTRAINT `ATIVIDADES_fk1` FOREIGN KEY (`usu_id`) REFERENCES `USUARIOS`(`usu_id`);

ALTER TABLE `ATIVIDADES` ADD CONSTRAINT `ATIVIDADES_fk2` FOREIGN KEY (`set_id`) REFERENCES `SETORES`(`set_id`);

ALTER TABLE `ATIVIDADES` ADD CONSTRAINT `ATIVIDADES_fk3` FOREIGN KEY (`atv_tp_id`) REFERENCES `ATIVIDADE_TIPOS`(`atv_tp_id`);









