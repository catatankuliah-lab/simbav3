const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const jenis_kendaraan = sequelize.define('jenis_kendaraan', {
    id_jenis_kendaraan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_jenis_kendaraan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rumus_bbm_ac_off: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    rumus_bbm_ac_on: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    rumus_bbm_per_ton: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    rumus_standby_ac_on: {
        type: DataTypes.DOUBLE,
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
    tableName: 'jenis_kendaraan',
    hooks: {
        beforeCreate: (jenis_kendaraan) => {
            jenis_kendaraan.nama_jenis_kendaraan = jenis_kendaraan.nama_jenis_kendaraan.toUpperCase();
        },
        beforeUpdate: (jenis_kendaraan) => {
            jenis_kendaraan.rumus_bbm_ac_off = jenis_kendaraan.rumus_bbm_ac_off.toUpperCase();
        },
        beforeUpdate: (jenis_kendaraan) => {
            jenis_kendaraan.rumus_bbm_ac_on = jenis_kendaraan.rumus_bbm_ac_on.toUpperCase();
        },
        beforeUpdate: (jenis_kendaraan) => {
            jenis_kendaraan.rumus_bbm_per_ton = jenis_kendaraan.rumus_bbm_per_ton.toUpperCase();
        },
        beforeUpdate: (jenis_kendaraan) => {
            jenis_kendaraan.rumus_standby_ac_on = jenis_kendaraan.rumus_standby_ac_on.toUpperCase();
        }
    }
});

module.exports = jenis_kendaraan;
