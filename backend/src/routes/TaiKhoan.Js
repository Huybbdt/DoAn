const express = require('express');
const router = express.Router();
const taikhoanController = require('../app/controllers/TaiKhoan');

router.get('/', taikhoanController.getAllTaiKhoan);
router.get('/:id', taikhoanController.getTaiKhoan);
router.post('/create', taikhoanController.createTaiKhoan);
router.put('/edit/:id', taikhoanController.editTaiKhoan);
router.delete('/delete/:id', taikhoanController.deleteTaiKhoan);
module.exports = router;
