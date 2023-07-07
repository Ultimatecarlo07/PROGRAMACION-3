const express = require('express');
const router = express.Router();

const areas_trabajoController = require('../Controller/areas_trabajoController');
router.get('/', areas_trabajoController.list);
router.post('/add', areas_trabajoController.save);
router.get('/delete/:idarea', areas_trabajoController.delete);
router.get('/update/:idarea', areas_trabajoController.edit);
router.post('/update/:idarea', areas_trabajoController.update);
module.exports = router;