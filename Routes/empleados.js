const express = require('express');
const router = express.Router();

const empleadosController = require('../Controller/empleadosController');
router.get('/', empleadosController.list);
router.post('/add', empleadosController.save);
router.get('/delete/:idemp', empleadosController.delete);
router.get('/update/:idemp', empleadosController.edit);
router.post('/update/:idemp', empleadosController.update);
module.exports = router;