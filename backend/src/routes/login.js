const express = require('express');
const app = express();
const router = express.Router();
const loginController = require('../app/controllers/login.controller');
// router.use('/', loginController.index);
router.post('/', loginController.postLogin);
module.exports = router;