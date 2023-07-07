const express = require('express');
const router = express.Router();

const sucursalesController = require('../Controller/surcusalesController');
router.get('/', sucursalesController.list);
router.post('/add', sucursalesController.save);
router.get('/delete/:idsuc', sucursalesController.delete);
router.get('/update/:idsuc', sucursalesController.edit);
router.post('/update/:idsuc', sucursalesController.update);
module.exports = router;