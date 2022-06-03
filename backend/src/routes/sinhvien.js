const express = require('express');
const router = express.Router();
const sinhvienController = require('../app/controllers/SinhVien');

router.get('/', sinhvienController.getAllSinhVien);
router.get('/:id', sinhvienController.getSinhVien);
router.post('/create', sinhvienController.createSinhVien);
router.put('/edit/:id', sinhvienController.editSinhVien);
router.delete('/delete/:id', sinhvienController.deleteSinhVien);
module.exports = router;
