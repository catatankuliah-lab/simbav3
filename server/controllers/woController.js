const Gudang = require('../models/gudangModel');
const AdminKancab = require('../models/adminKancabModel');
const Wo = require('../models/woModel');
const KantorCabang = require('../models/kantorCabangModel');
const User = require('../models/userModel');
const HakAkses = require('../models/hakAksesModel');

const addWo = async (req, res) => {
    const {
        id_gudang,
        id_admin_kancab,
        nomor_lo,
        tanggal_lo,
        total_tonase,
        status_wo,
        qr_wo
    } = req.body;

    try {
        const newWo = await Wo.create({
            id_gudang,
            id_admin_kancab,
            nomor_lo,
            tanggal_lo,
            total_tonase,
            status_wo,
            qr_wo
        });
        res.status(200).send(newWo);
    } catch (error) {
        console.error(req.body);
        res.status(500).send('Server Error');
    }
};

const getAllWo = async (req, res) => {
    try {
        const wo = await Wo.findAll({
            include: [
                {
                    model: Gudang,
                    as: 'gudang',
                    include: {
                        model: KantorCabang,
                        as: "kantor_cabang",
                    },
                },
                {
                    model: AdminKancab,
                    as: 'admin_kancab',
                    include: {
                        model: User,
                        as: 'user',
                        include: {
                            model: HakAkses,
                            as: "hak_akses",
                        },
                    },
                }]
        });
        res.status(200).send(wo);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addWo,
    getAllWo
};
