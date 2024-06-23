const express = require('express');
const router = express.Router();
const hakAksesController = require('../controllers/hakAksesController');

// Route untuk menambahkan mobil baru
router.post('/add', hakAksesController.addHakAkses);

// Route untuk membaca semua data mobil
router.get('/all', hakAksesController.getAllHakAkses);

module.exports = router;
