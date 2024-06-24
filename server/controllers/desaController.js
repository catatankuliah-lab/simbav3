// controllers/mobilController.js
const Desa = require("../models/desaModel");
const Kecamatan = require("../models/kecamatanModel");
const Kabupaten = require("../models/kabupatenModel");
const Provinsi = require("../models/provinsiModel");

// Menangani permintaan untuk menambahkan mobil baru
const addDesa = async (req, res) => {
  const { kode_desa_kelurahan, nama_desa_kelurahan, id_kecamatan } = req.body;
  try {
    const newDesa = await Desa.create({
      kode_desa_kelurahan,
      nama_desa_kelurahan,
      id_kecamatan,
    });
    res.status(200).send(newDesa);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getAllDesa = async (req, res) => {
  try {
    const desas = await Desa.findAll({
      include: [
        {
          model: Kecamatan,
          as: "kecamatan",
          include: {
            model: Kabupaten,
            as: "kabupaten_kota",
          },
        },
      ],
    });
    res.status(200).json(desas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addDesa,
  getAllDesa,
};
