const express = require("express");
const router = express.Router();
const kecamatanController = require("../controllers/kecamatanController");

// Route untuk menambahkan mobil baru
router.post("/add", kecamatanController.addKecamatan);

// Route untuk membaca semua data mobil
router.get("/all", kecamatanController.getAllKecamatan);

module.exports = router;
