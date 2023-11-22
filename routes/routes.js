const db = require('../database/connection');
const express = require('express');
const router = express.Router();

const AtividadesController = require('../controllers/atividades');
const AtividadeTiposController = require('../controllers/atividadeTipos');
const FornecedoresController = require('../controllers/fornecedores');
const FornecedoresProdutosController = require('../controllers/fornecedoresProduto');
const ProdutosController = require('../controllers/produtos');
const RetiradaEstoqueController = require('../controllers/retiradaEstoque');
const setoresController = require('../controllers/setores');
const UsuariosController = require('../controllers/usuarios');



router.get('/atividades', AtividadesController.listarAtividades)
router.post('/atividades', AtividadesController.cadastrarAtividades)
router.patch('/atividades', AtividadesController.editarAtividades)
router.delete('/atividades', AtividadesController.apagarAtividades)

router.get('/atividadeTipos', AtividadeTiposController.listarAtividadeTipos)
router.post('/atividadeTipos', AtividadeTiposController.cadastrarAtividadeTipos)
router.patch('/atividadeTipos', AtividadeTiposController.editarAtividadeTipos)
router.delete('/atividadeTipos', AtividadeTiposController.apagarAtividadeTipos)

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
router.patch('/produtos/:prod_id', ProdutosController.editarProdutos)
router.delete('/produtos/:prod_id', ProdutosController.apagarProdutos)

router.get('/retiradaEstoque', RetiradaEstoqueController.listarRetiradaEstoque)
router.post('/retiradaEstoque', RetiradaEstoqueController.cadastrarRetiradaEstoque)
router.patch('/retiradaEstoque', RetiradaEstoqueController.editarRetiradaEstoque)
router.delete('/retiradaEstoque', RetiradaEstoqueController.apagarRetiradaEstoque)

router.get('/setores', setoresController.listarSetores)
router.post('/setores', setoresController.cadastrarSetores)
router.patch('/setores', setoresController.editarSetores)
router.delete('/setores', setoresController.apagarSetores)

router.get('/usuarios', UsuariosController.listarUsuarios)
router.post('/usuarios', UsuariosController.cadastrarUsuarios)
router.patch('/usuarios/:usu_id', UsuariosController.editarUsuarios)
router.delete('/usuarios/: usu_id', UsuariosController.apagarUsuarios)

module.exports = router;