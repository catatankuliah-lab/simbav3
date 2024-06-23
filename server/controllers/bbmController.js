const BBM = require('../models/bbmModel');

const addBbm = async (req, res) => {
    const {
        nama_bbm,
        harga_bbm,
    } = req.body;

    try {
        const newBbm = await BBM.create({
            nama_bbm,
            harga_bbm,
        });
        res.status(200).send(newBbm);
    } catch (error) {
        console.error(req.body);
        res.status(500).send('Server Error');
    }
};

const getAllBbm = async (req, res) => {
    try {
        const bbm = await BBM.findAll();
        res.status(200).json(bbm);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addBbm,
    getAllBbm
};
