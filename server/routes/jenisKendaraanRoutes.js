const express = require('express');
const router = express.Router();
const jenisKendaraanController = require('../controllers/jenisKendaraanController');

// Route untuk menambahkan mobil baru
router.post('/add', jenisKendaraanController.addJenisKendaraan);

// Route untuk membaca semua data mobil
router.get('/all', jenisKendaraanController.getAllJenisKendaraan);

module.exports = router;
