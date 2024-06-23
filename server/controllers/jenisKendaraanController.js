const jenis_kendaraan = require('../models/jenisKendaraanModel');

const addJenisKendaraan = async (req, res) => {
    const {
        nama_jenis_kendaraan,
        rumus_bbm_ac_off,
        rumus_bbm_ac_on,
        rumus_bbm_per_ton,
        rumus_standby_ac_on,
    } = req.body;

    try {
        const newJenisKendaraan = await jenis_kendaraan.create({
            nama_jenis_kendaraan,
            rumus_bbm_ac_off,
            rumus_bbm_ac_on,
            rumus_bbm_per_ton,
            rumus_standby_ac_on,
        });
        res.status(200).send(newJenisKendaraan);
    } catch (error) {
        console.error(req.body);
        res.status(500).send('Server Error');
    }
};

const getAllJenisKendaraan = async (req, res) => {
    try {
        const newJenisKendaraan = await jenis_kendaraan.findAll();
        res.status(200).json(newJenisKendaraan);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addJenisKendaraan,
    getAllJenisKendaraan
};
