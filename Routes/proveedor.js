const express = require('express');
const router = express.Router();

const proveedorController = require('../Controller/proveedorController');
router.get('/', proveedorController.list);
router.post('/add', proveedorController.save);
router.get('/delete/:idprov', proveedorController.delete);
router.get('/update/:idprov', proveedorController.edit);
router.post('/update/:idprov', proveedorController.update);
module.exports = router;