const express = require('express');
const router = express.Router();
const thongbaoController = require('../app/controllers/ThongBao');
const upload = require('../utils/multer')

router.get('/', thongbaoController.getAllThongBao);
router.get('/:id', thongbaoController.getThongBao);
router.post('/create',upload.single("Anh"),thongbaoController.createThongBao);
router.put('/edit/:id',upload.single("Anh"), thongbaoController.editThongBao);
router.delete('/delete/:id', thongbaoController.deleteThongBao);
module.exports = router;
