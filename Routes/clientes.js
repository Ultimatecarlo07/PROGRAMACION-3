const express = require('express');
const router = express.Router();

const clientesController = require('../Controller/clientesController');
router.get('/', clientesController.list);
router.post('/add', clientesController.save);
router.get('/delete/:num_clie', clientesController.delete);
router.get('/update/:num_clie', clientesController.edit);
router.post('/update/:num_clie', clientesController.update);
module.exports = router;