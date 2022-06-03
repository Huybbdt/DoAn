const express = require('express');
const router = express.Router();
const bienlaithutienController = require('../app/controllers/BienLaiThuTien');

router.get('/', bienlaithutienController.getAllBienLaiThuTien);
router.get('/:id', bienlaithutienController.getBienLaiThuTien);
router.post('/create', bienlaithutienController.createBienLaiThuTien);
router.put('/edit/:id', bienlaithutienController.editBienLaiThuTien);
router.delete('/delete/:id', bienlaithutienController.deleteBienLaiThuTien);

module.exports = router;
