const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const BBM = sequelize.define('bbm', {
    id_bbm: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_bbm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    harga_bbm: {
        type: DataTypes.INTEGER,
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
    tableName: 'bbm',
    hooks: {
        beforeCreate: (bbm) => {
            bbm.nama_bbm = bbm.nama_bbm.toUpperCase();
        },
        beforeUpdate: (bbm) => {
            bbm.nama_bbm = bbm.nama_bbm.toUpperCase();
        }
    }
});

module.exports = BBM;
