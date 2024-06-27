const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Gudang = require('./gudangModel');
const AdminKancab = require('./adminKancabModel');

const Wo = sequelize.define('wo', {
    id_wo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_gudang: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Gudang,
            key: 'id_gudang'
        }
    },
    id_admin_kancab: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: AdminKancab,
            key: 'id_admin_kancab'
        }
    },
    nomor_wo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_wo: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_tonase: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status_wo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qr_wo: {
        type: DataTypes.STRING,
        allowNull: false,
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
    tableName: 'wo',
});

Wo.belongsTo(Gudang, { foreignKey: 'id_gudang', as: 'gudang' });
Wo.belongsTo(AdminKancab, { foreignKey: 'id_admin_kancab', as: 'admin_kancab' });

module.exports = Wo;
