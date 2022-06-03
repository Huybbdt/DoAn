const express = require('express');
const router = express.Router();
const phongController = require('../app/controllers/Phong');

router.get('/', phongController.getAllPhong);
router.get('/:id', phongController.getPhong);
router.post('/create', phongController.createPhong);
router.put('/edit/:id', phongController.editPhong);
router.delete('/delete/:id', phongController.deletePhong);
module.exports = router;
