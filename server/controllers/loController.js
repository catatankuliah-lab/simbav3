const Lo = require('../models/loModel');
const ItemWo = require('../models/itemWoModel');
const Checker = require('../models/checkerGudangModel');
const Gudang = require('../models/gudangModel');
const Wo = require('../models/woModel');
const User = require('../models/userModel');
const KantorCabang = require('../models/kantorCabangModel');
const Sjt = require('../models/sjtModel');
const Desa = require('../models/desaModel');
const Kecamatan = require('../models/kecamatanModel');
const Kabupaten = require('../models/kabupatenModel');
const Provinsi = require('../models/provinsiModel');

const addLo = async (req, res) => {
    const {
        id_item_wo,
        id_checker_gudang,
        nomor_lo,
        tanggal_lo,
        tonase_lo,
        status_lo,
        jam_pemberangkatan,
        qr_lo
    } = req.body;

    try {
        const newLo = await Lo.create({
            id_item_wo,
            id_checker_gudang,
            nomor_lo,
            tanggal_lo,
            tonase_lo,
            status_lo,
            jam_pemberangkatan,
            qr_lo
        });
        res.status(200).send(newLo);
    } catch (error) {
        console.error(req.body);
        res.status(500).send('Server Error');
    }
};

const getAllLo = async (req, res) => {
    try {
        const lo = await Lo.findAll({
            include: [
                {
                    model: ItemWo,
                    as: 'item_wo',
                    include: {
                        model: Wo,
                        as: 'wo',
                        include: {
                            model: Gudang,
                            as: 'gudang',
                        },
                    },
                },
                {
                    model: Checker,
                    as: 'checker_gudang',
                    include: {
                        model: User,
                        as: 'user',
                    },
                }]
        });
        res.status(200).send(lo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const getDetailLO = async (req, res) => {
    const { id } = req.params;
    try {
        const lo = await Lo.findByPk(id, {
            include: [
                {
                    model: ItemWo,
                    as: 'item_wo',
                    include: {
                        model: Wo,
                        as: 'wo',
                        include: {
                            model: Gudang,
                            as: 'gudang',
                        },
                    },
                },
                {
                    model: Checker,
                    as: 'checker_gudang',
                    include: {
                        model: User,
                        as: 'user',
                    },
                }]
        });

        if (!lo) {
            return res.status(404).json({ message: 'LO not found' });
        }

        res.status(200).json(lo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const getDetailsLO = async (req, res) => {
    const { id } = req.params;
    try {
        const lo = await Lo.findByPk(id, {
            include: [
                {
                    model: Checker,
                    as: 'checker_gudang',
                    include: {
                        model: Gudang,
                        as: "gudang",
                        include: {
                            model: KantorCabang,
                            as: "kantor_cabang",
                        },
                    },
                },
                {
                    model: ItemWo,
                    as: 'item_wo',
                    include:
                    {
                        model: Desa,
                        as: "desa_kelurahan",
                        include: {
                            model: Kecamatan,
                            as: "kecamatan",
                            include: {
                                model: Kabupaten,
                                as: "kabupaten_kota",
                                include: {
                                    model: Provinsi,
                                    as: "provinsi",
                                }
                            }
                        }

                    },
                }
            ]
        });

        if (!lo) {
            return res.status(404).json({ message: 'LO not found' });
        }

        res.status(200).json(lo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addLo,
    getAllLo,
    getDetailLO,
    getDetailsLO,
};
