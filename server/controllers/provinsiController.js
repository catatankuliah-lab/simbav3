const Provinsi = require("../models/provinsiModel");

const addProvinsi = async (req, res) => {
  const { kode_provinsi, nama_provinsi } = req.body;

  try {
    const newProvinsi = await Provinsi.create({
      kode_provinsi,
      nama_provinsi,
    });
    res.status(200).send(newProvinsi);
  } catch (error) {
    console.error(req.body);
    res.status(500).send("Server Error");
  }
};

const getAllProvinsi = async (req, res) => {
  try {
    const provinsi = await Provinsi.findAll();
    res.status(200).json(provinsi);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addProvinsi,
  getAllProvinsi,
};
