const express = require('express');
const router = express.Router();
const bbmController = require('../controllers/bbmController');

// Route untuk menambahkan mobil baru
router.post('/add', bbmController.addBbm);

// Route untuk membaca semua data mobil
router.get('/all', bbmController.getAllBbm);

module.exports = router;
