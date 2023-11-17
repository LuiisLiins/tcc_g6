const db = require('../database/connection');
const express = require('express');
const router = express.Router();

const AtividadesController = require('../controllers/atividades');
const AtividadeTiposController = require('../controllers/atividadeTipos');
const FornecedoresController = require('../controllers/fornecedores');
const FornecedoresProdutosController = require('../controllers/fornecedoresProduto');
const ProdutosController = require('../controllers/produtos');
const RetiradasEstoqueController = require('../controllers/retiradasEstoque');
const setoresController = require('../controllers/setores');
const UsuariosController = require('../controllers/usuarios');



router.get('/atividades', AtividadesController.listarAtividades)
router.post('/atividades', AtividadesController.cadastrarAtividades)
router.patch('/atividades/:atv_id', AtividadesController.editarAtividades)
router.delete('/atividades/:atv_id', AtividadesController.apagarAtividades)

router.get('/atividadeTipos', AtividadeTiposController.listarAtividadeTipos)
router.post('/atividadeTipos', AtividadeTiposController.cadastrarAtividadeTipos)
router.patch('/atividadeTipos/:atv_tp_tipo', AtividadeTiposController.editarAtividadeTipos)
router.delete('/atividadeTipos/:atv_tp_tipo', AtividadeTiposController.apagarAtividadeTipos)

router.get('/fornecedores', FornecedoresController.listarFornecedores)
router.post('/fornecedores', FornecedoresController.cadastrarFornecedores)
router.patch('/fornecedores', FornecedoresController.editarFornecedores)
router.delete('/fornecedores', FornecedoresController.apagarFornecedores)

router.get('/fornecedoresProduto', FornecedoresProdutosController.listarFornecedoresProduto)
router.post('/fornecedoresProduto', FornecedoresProdutosController.cadastrarFornecedoresProduto)
router.patch('/fornecedoresProduto', FornecedoresProdutosController.editarFornecedoresProduto)
router.delete('/fornecedoresProduto', FornecedoresProdutosController.apagarFornecedoresProduto)

router.get('/produtos', ProdutosController.listarProdutos)
router.post('/produtos', ProdutosController.cadastrarProdutos)
router.patch('/produtos', ProdutosController.editarProdutos)
router.delete('/produtos', ProdutosController.apagarProdutos)

router.get('/RetiradasEstoque', RetiradasEstoqueController.listarRetiradasEstoque)
router.post('/RetiradasEstoque', RetiradasEstoqueController.cadastrarRetiradasEstoque)
router.patch('/RetiradasEstoque/:ret_id', RetiradasEstoqueController.editarRetiradasEstoque)
router.delete('/RetiradasEstoque/:ret_id', RetiradasEstoqueController.apagarRetiradasEstoque)

router.get('/setores', setoresController.listarSetores)
router.post('/setores', setoresController.cadastrarSetores)
router.patch('/setores', setoresController.editarSetores)
router.delete('/setores', setoresController.apagarSetores)

router.get('/usuarios', UsuariosController.listarUsuarios)
router.post('/usuarios', UsuariosController.cadastrarUsuarios)
router.patch('/usuarios', UsuariosController.editarUsuarios)
router.delete('/usuarios', UsuariosController.apagarUsuarios)

module.exports = router;