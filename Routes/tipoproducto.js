const express = require('express');
const router = express.Router();

const tipoproductoController = require('../Controller/tipoproductoController');
router.get('/', tipoproductoController.list);
router.post('/add', tipoproductoController.save);
router.get('/delete/:idtpprod', tipoproductoController.delete);
router.get('/update/:idtpprod', tipoproductoController.edit);
router.post('/update/:idtpprod', tipoproductoController.update);
module.exports = router;