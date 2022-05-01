const express = require('express');
const app = express();
const router = express.Router();
const newController = require('../app/controllers/new.controller');
router.use('/', newController.index);
module.exports = router;
