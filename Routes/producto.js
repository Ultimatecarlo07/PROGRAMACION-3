const express = require('express');
const router = express.Router();

const productoController = require('../Controller/productoController');
router.get('/', productoController.list);
router.post('/add', productoController.save);
router.get('/delete/:num_prod', productoController.delete);
router.get('/update/:num_prod', productoController.edit);
router.post('/update/:num_prod', productoController.update);
module.exports = router;