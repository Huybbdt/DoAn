const express = require('express');
const app = express();
const router = express.Router();
const forgotPasswordController = require('../app/controllers/forgotPassword.controller');
router.use('/', forgotPasswordController.index);
module.exports = router;
