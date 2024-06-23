const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const JenisKendaraan = require('./jenisKendaraanModel');

const Mobil = sequelize.define('Mobil', {
    id_mobil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nopol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    merk_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_jenis_kendaraan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: JenisKendaraan,
            key: 'id_jenis_kendaraan'
        }
    },
    warna_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warna_tnkb_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tahun_pembuatan_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tahun_registrasi_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ukuran_silinder_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_bbm: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nomor_mesin_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_rangka_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_bpkb_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomor_stnk_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    masa_berlaku_stnk_mobil: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bobot_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nomor_kir_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    masa_berlaku_kir_mobil: {
        type: DataTypes.DATE,
        allowNull: false
    },
    foto_tampak_depan: {
        type: DataTypes.STRING,
        allowNull: true
    },
    foto_tampak_belakang: {
        type: DataTypes.STRING,
        allowNull: true
    },
    foto_tampak_kanan: {
        type: DataTypes.STRING,
        allowNull: true
    },
    foto_tampak_kiri: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status_mobil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    tableName: 'mobil',
    hooks: {
        beforeCreate: (Mobil) => {
            Mobil.nopol = Mobil.nopol.toUpperCase();
            Mobil.merk_mobil = Mobil.merk_mobil.toUpperCase();
            Mobil.id_jenis_kendaraan = Mobil.id_jenis_kendaraan.toUpperCase();
            Mobil.warna_mobil = Mobil.warna_mobil.toUpperCase();
            Mobil.warna_tnkb_mobil = Mobil.warna_tnkb_mobil.toUpperCase();
            Mobil.tahun_pembuatan_mobil = Mobil.tahun_pembuatan_mobil.toUpperCase();
            Mobil.tahun_registrasi_mobil = Mobil.tahun_registrasi_mobil.toUpperCase();
            Mobil.ukuran_silinder_mobil = Mobil.ukuran_silinder_mobil.toUpperCase();
            Mobil.id_bbm = Mobil.id_bbm.toUpperCase();
            Mobil.nomor_mesin_mobil = Mobil.nomor_mesin_mobil.toUpperCase();
            Mobil.nomor_rangka_mobil = Mobil.nomor_rangka_mobil.toUpperCase();
            Mobil.nomor_bpkb_mobil = Mobil.nomor_bpkb_mobil.toUpperCase();
            Mobil.nomor_stnk_mobil = Mobil.nomor_stnk_mobil.toUpperCase();
            Mobil.bobot_mobil = Mobil.bobot_mobil.toUpperCase();
            Mobil.nomor_kir_mobil = Mobil.nomor_kir_mobil.toUpperCase();
            Mobil.status_mobil = Mobil.status_mobil.toUpperCase();
        },
        beforeUpdate: (Mobil) => {
            Mobil.nopol = Mobil.nopol.toUpperCase();
            Mobil.merk_mobil = Mobil.merk_mobil.toUpperCase();
            Mobil.id_jenis_kendaraan = Mobil.id_jenis_kendaraan.toUpperCase();
            Mobil.warna_mobil = Mobil.warna_mobil.toUpperCase();
            Mobil.warna_tnkb_mobil = Mobil.warna_tnkb_mobil.toUpperCase();
            Mobil.tahun_pembuatan_mobil = Mobil.tahun_pembuatan_mobil.toUpperCase();
            Mobil.tahun_registrasi_mobil = Mobil.tahun_registrasi_mobil.toUpperCase();
            Mobil.ukuran_silinder_mobil = Mobil.ukuran_silinder_mobil.toUpperCase();
            Mobil.id_bbm = Mobil.id_bbm.toUpperCase();
            Mobil.nomor_mesin_mobil = Mobil.nomor_mesin_mobil.toUpperCase();
            Mobil.nomor_rangka_mobil = Mobil.nomor_rangka_mobil.toUpperCase();
            Mobil.nomor_bpkb_mobil = Mobil.nomor_bpkb_mobil.toUpperCase();
            Mobil.nomor_stnk_mobil = Mobil.nomor_stnk_mobil.toUpperCase();
            Mobil.bobot_mobil = Mobil.bobot_mobil.toUpperCase();
            Mobil.nomor_kir_mobil = Mobil.nomor_kir_mobil.toUpperCase();
            Mobil.status_mobil = Mobil.status_mobil.toUpperCase();
        },
    }
});

Mobil.belongsTo(JenisKendaraan, { foreignKey: 'id_jenis_kendaraan' });

module.exports = Mobil;