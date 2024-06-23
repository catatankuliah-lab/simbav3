// controllers/mobilController.js
const Kabupaten = require("../models/kabupatenModel");
const Provinsi = require("../models/provinsiModel");

// Menangani permintaan untuk menambahkan mobil baru
const addKabupaten = async (req, res) => {
  const { kode_kabupaten_kota, nama_kabupaten_kota, id_provinsi } = req.body;
  try {
    const newKabupaten = await Kabupaten.create({
      kode_kabupaten_kota,
      nama_kabupaten_kota,
      id_provinsi,
    });
    res.status(200).send(newKabupaten);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getAllKabupaten = async (req, res) => {
  try {
    const kabupatens = await Kabupaten.findAll({
      include: {
        model: Provinsi,
        as: "provinsi",
        attributes: ["id_provinsi"],
      },
    });
    res.status(200).send(kabupatens);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addKabupaten,
  getAllKabupaten,
};
