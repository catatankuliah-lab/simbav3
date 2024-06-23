const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const HakAkses = require('./hakAksesModel');

const User = sequelize.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_hak_akses: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: HakAkses,
            key: 'id_hak_akses'
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nama_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status_user: {
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
    tableName: 'user',
    hooks: {
        beforeCreate: (user) => {
            user.username = user.username.toUpperCase();
            user.password = user.password.toUpperCase();
            user.nama_user = user.nama_user.toUpperCase();
            user.status_user = user.status_user.toUpperCase();
        },
        beforeUpdate: (user) => {
            user.username = user.username.toUpperCase();
            user.password = user.password.toUpperCase();
            user.nama_user = user.nama_user.toUpperCase();
            user.status_user = user.status_user.toUpperCase();
        }
    }
});

User.belongsTo(HakAkses, { foreignKey: 'id_hak_akses', as: 'hak_akses' });

module.exports = User;
