
const express = require('express');
const router = express.Router();

const empresaController = require('../Controller/empresaController');
router.get('/', empresaController.list);
router.post('/add', empresaController.save);
router.get('/delete/:idempresa', empresaController.delete);
router.get('/update/:idempresa', empresaController.edit);
router.post('/update/:idempresa', empresaController.update);
module.exports = router;