const express = require('express');
const router = express.Router();
const woController = require('../controllers/woController');

router.post('/add', woController.addWo);

router.get('/all', woController.getAllWo);

module.exports = router;
