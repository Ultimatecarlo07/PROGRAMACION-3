const express = require('express');
const router = express.Router();

const usuarioController = require('../Controller/usuarioController');
router.get('/', usuarioController.list);
router.post('/add', usuarioController.save);
router.get('/delete/:userid', usuarioController.delete);
router.get('/update/:userid', usuarioController.edit);
router.post('/update/:userid', usuarioController.update);
module.exports = router;