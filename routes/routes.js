const db = require('../database/connection');
const express = require('express');
const router = express.Router();

const AtividadesController = require('../controllers/atividades');

router.get('/atividades', AtividadesController.listarAtividades)
//post
//patch
//delete

module.export = router;