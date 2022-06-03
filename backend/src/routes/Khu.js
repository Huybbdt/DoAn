const express = require('express');
const router = express.Router();
const khuController = require('../app/controllers/Khu');

router.get('/', khuController.getAllKhu);
router.get('/:id', khuController.getKhu);
router.post('/create', khuController.createKhu);
router.put('/edit/:id', khuController.editKhu);
router.delete('/delete/:id', khuController.deleteKhu);
module.exports = router;
