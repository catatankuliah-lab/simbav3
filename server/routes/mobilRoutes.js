// routes/mobilRoutes.js

const express = require('express');
const router = express.Router();
const mobilController = require('../controllers/mobilController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/mobil/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route untuk menambahkan mobil baru
router.post('/add', upload.fields([
    { name: 'foto_tampak_depan', maxCount: 1 },
    { name: 'foto_tampak_belakang', maxCount: 1 },
    { name: 'foto_tampak_kanan', maxCount: 1 },
    { name: 'foto_tampak_kiri', maxCount: 1 }
]), mobilController.addMobil);

// Route untuk membaca semua data mobil
router.get('/all', mobilController.getAllMobil);

module.exports = router;
