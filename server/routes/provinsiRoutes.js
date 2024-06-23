const express = require("express");
const router = express.Router();
const provinsiController = require("../controllers/provinsiController");

// Route untuk menambahkan mobil baru
router.post("/add", provinsiController.addProvinsi);

// Route untuk membaca semua data mobil
router.get("/all", provinsiController.getAllProvinsi);

module.exports = router;
