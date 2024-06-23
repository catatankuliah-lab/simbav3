// controllers/mobilController.js
const Kecamatan = require("../models/kecamatanModel");
const Kabupaten = require("../models/kabupatenModel");
const Provinsi = require("../models/provinsiModel");

// Menangani permintaan untuk menambahkan mobil baru
const addKecamatan = async (req, res) => {
  const { kode_kecamatan, nama_kecamatan, id_kabupaten_kota } = req.body;
  try {
    const newKecamatan = await Kecamatan.create({
      kode_kecamatan,
      nama_kecamatan,
      id_kabupaten_kota,
    });
    res.status(200).send(newKecamatan);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getAllKecamatan = async (req, res) => {
  try {
    const kecamatans = await Kecamatan.findAll({
      include: [
        {
          model: Kabupaten,
          as: "kabupaten_kota",
          include: {
            model: Provinsi,
            as: "provinsi",
          },
        },
      ],
    });
    res.status(200).json(kecamatans);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addKecamatan,
  getAllKecamatan,
};
