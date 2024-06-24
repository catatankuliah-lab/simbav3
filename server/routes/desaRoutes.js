const express = require("express");
const router = express.Router();
const desaController = require("../controllers/desaController");

// Route untuk menambahkan mobil baru
router.post("/add", desaController.addDesa);

// Route untuk membaca semua data mobil
router.get("/all", desaController.getAllDesa);

module.exports = router;
