// controllers/mobilController.js
const MasterDataKpm = require("../models/masterDataKpmModel");
const Desa = require("../models/desaModel");

// Menangani permintaan untuk menambahkan mobil baru
const addMasterDataKpm = async (req, res) => {
  const {
    nama_kpm,
    status_master_data_kpm,
    qr_master_data_kpm,
    id_desa_kelurahan,
  } = req.body;
  try {
    const newMasterDataKpm = await MasterDataKpm.create({
      nama_kpm,
      status_master_data_kpm,
      qr_master_data_kpm,
      id_desa_kelurahan,
    });
    res.status(200).send(newMasterDataKpm);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getAllDataMasterKpm = async (req, res) => {
  try {
    const masterdatakpms = await MasterDataKpm.findAll({
      include: [
        {
          model: Desa,
          as: "desa_kelurahan",
        },
      ],
    });
    res.status(200).json(masterdatakpms);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addMasterDataKpm,
  getAllDataMasterKpm,
};
