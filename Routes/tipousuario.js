const express = require('express');
const router = express.Router();

const tipousuarioController = require('../Controller/tipousuarioController');
router.get('/', tipousuarioController.list);
router.post('/add', tipousuarioController.save);
router.get('/delete/:idtpusuario', tipousuarioController.delete);
router.get('/update/:idtpusuario', tipousuarioController.edit);
router.post('/update/:idtpusuario', tipousuarioController.update);
module.exports = router;