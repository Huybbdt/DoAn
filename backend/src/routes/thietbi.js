const express = require('express');
const router = express.Router();
const thietbiController = require('../app/controllers/thietbi.controller');

router.get('/', thietbiController.getAllThietBi);
router.get('/:id', thietbiController.getThietBi);
router.post('/create', thietbiController.createThietBi);
router.put('/edit/:id', thietbiController.editThietBi);
router.delete('/delete/:id', thietbiController.deleteThietBi);
module.exports = router;
