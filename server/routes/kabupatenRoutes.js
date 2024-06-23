const express = require("express");
const router = express.Router();
const kabupatenController = require("../controllers/kabupatenController");

// Route untuk menambahkan mobil baru
router.post("/add", kabupatenController.addKabupaten);

// Route untuk membaca semua data mobil
router.get("/all", kabupatenController.getAllKabupaten);

module.exports = router;
