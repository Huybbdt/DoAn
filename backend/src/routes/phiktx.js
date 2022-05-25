const express = require('express');
const router = express.Router();
const phiktxController = require('../app/controllers/phiktx.controller');

// router.use('/', loginController.login);
router.get('/', phiktxController.getAllPhiKTX);
router.get('/:id', phiktxController.getPhiKTX);
router.post('/create', phiktxController.createPhiKTX);
router.put('/edit/:id', phiktxController.editPhiKTX);
router.delete('/delete/:id', phiktxController.deletePhiKTX);

module.exports = router;
