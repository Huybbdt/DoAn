const express = require('express');
const router = express.Router();
const nhanvienController = require('../app/controllers/nhanvien.controller');

// router.use('/', loginController.login);
router.get('/', nhanvienController.getAllNhanVien);
router.get('/:id', nhanvienController.getNhanVien);
router.post('/create', nhanvienController.createNhanVien);
router.put('/edit/:id', nhanvienController.editNhanVien);
router.delete('/delete/:id', nhanvienController.deleteNhanVien);

module.exports = router;
