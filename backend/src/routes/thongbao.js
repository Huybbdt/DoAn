const express = require('express');
const router = express.Router();
const thongbaoController = require('../app/controllers/thongbao.controller');

router.get('/', thongbaoController.getAllThongBao);
router.get('/:id', thongbaoController.getThongBao);
router.post('/create', thongbaoController.createThongBao);
router.put('/edit/:id', thongbaoController.editThongBao);
router.delete('/delete/:id', thongbaoController.deleteThongBao);
module.exports = router;
