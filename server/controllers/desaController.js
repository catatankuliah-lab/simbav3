// controllers/mobilController.js
const Desa = require("../models/desaModel");
const Kecamatan = require("../models/kecamatanModel");
const Kabupaten = require("../models/kabupatenModel");
const Provinsi = require("../models/provinsiModel");

// Menangani permintaan untuk menambahkan mobil baru
const addDesa = async (req, res) => {
  const {
    kode_desa_keluarahan,
    desa_keluarahan,
    id_kecamatan
  } = req.body;
  try {
    const newDesa = await Desa.create({
      kode_desa_keluarahan,
      desa_keluarahan,
      id_kecamatan
    });
    res.status(200).send(newDesa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getAllDesa = async (req, res) => {
  try {
    const desa = await Desa.findAll({
      include: [
        {
          model: Kecamatan,
          as: "kecamatan",
          include: {
            model: Kabupaten,
            as: "kabupaten_kota",
            include: {
              model: Provinsi,
              as: "provinsi",
            },
          },
        },
      ],
    });
    res.status(200).json(desa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addDesa,
  getAllDesa,
};
