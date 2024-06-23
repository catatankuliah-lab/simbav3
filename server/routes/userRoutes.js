const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route untuk menambahkan mobil baru
router.post('/add', userController.addUser);

// Route untuk membaca semua data mobil
router.get('/all', userController.getAllUser);

module.exports = router;
