const express = require('express');
const app = express();
const router = express.Router();
const loginController = require('../app/controllers/Login');
router.post('/', loginController.postLogin);
module.exports = router;
