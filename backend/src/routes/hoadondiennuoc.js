const express = require('express');
const router = express.Router();
const hoadondiennuocController = require('../app/controllers/HoaDonDienNuoc');
router.get('/', hoadondiennuocController.getAllHoaDonDienNuoc);
router.get('/:id', hoadondiennuocController.getHoaDonDienNuoc);
router.post('/create', hoadondiennuocController.createHoaDonDienNuoc);
router.put('/edit/:id', hoadondiennuocController.editHoaDonDienNuoc);
router.delete('/delete/:id', hoadondiennuocController.editHoaDonDienNuoc);
module.exports = router;
