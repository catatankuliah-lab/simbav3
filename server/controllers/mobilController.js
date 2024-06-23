// controllers/mobilController.js
const Mobil = require('../models/mobilModel');
const JenisKendaraan = require('../models/jenisKendaraanModel');

// Menangani permintaan untuk menambahkan mobil baru
const addMobil = async (req, res) => {
    const {
        nopol,
        merk_mobil,
        id_jenis_kendaraan,
        warna_mobil,
        warna_tnkb_mobil,
        tahun_pembuatan_mobil,
        tahun_registrasi_mobil,
        ukuran_silinder_mobil,
        id_bbm,
        nomor_mesin_mobil,
        nomor_rangka_mobil,
        nomor_bpkb_mobil,
        nomor_stnk_mobil,
        masa_berlaku_stnk_mobil,
        bobot_mobil,
        nomor_kir_mobil,
        masa_berlaku_kir_mobil,
        status_mobil,
    } = req.body;
    const foto_tampak_depan = req.files['foto_tampak_depan'] ? req.files['foto_tampak_depan'][0].filename : null;
    const foto_tampak_belakang = req.files['foto_tampak_belakang'] ? req.files['foto_tampak_belakang'][0].filename : null;
    const foto_tampak_kanan = req.files['foto_tampak_kanan'] ? req.files['foto_tampak_kanan'][0].filename : null;
    const foto_tampak_kiri = req.files['foto_tampak_kiri'] ? req.files['foto_tampak_kiri'][0].filename : null;

    try {
        const newMobil = await Mobil.create({
            nopol,
            merk_mobil,
            id_jenis_kendaraan,
            warna_mobil,
            warna_tnkb_mobil,
            tahun_pembuatan_mobil,
            tahun_registrasi_mobil,
            ukuran_silinder_mobil,
            id_bbm,
            nomor_mesin_mobil,
            nomor_rangka_mobil,
            nomor_bpkb_mobil,
            nomor_stnk_mobil,
            masa_berlaku_stnk_mobil,
            bobot_mobil,
            nomor_kir_mobil,
            masa_berlaku_kir_mobil,
            status_mobil,
            foto_tampak_depan,
            foto_tampak_belakang,
            foto_tampak_kanan,
            foto_tampak_kiri
        });
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

const getAllMobil = async (req, res) => {
    try {
        const mobils = await Mobil.findAll({
            include: {
                model: JenisKendaraan,
                attributes: ['nama_jenis_kendaraan']
            }
        });
        res.status(200).send(mobils);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addMobil,
    getAllMobil
};
