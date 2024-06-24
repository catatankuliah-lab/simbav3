const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Kecamatan = require("./kecamatanModel");

const Desa = sequelize.define(
  "desa",
  {
    id_desa_kelurahan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kode_desa_kelurahan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_desa_kelurahan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_kecamatan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Kecamatan,
        key: "id_kecamatan",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    tableName: "desa_kelurahan",
    hooks: {
      beforeCreate: (desa) => {
        desa.kode_desa_kelurahan = desa.kode_desa_kelurahan.toUpperCase();
        desa.nama_desa_kelurahan = desa.nama_desa_kelurahan.toUpperCase();
      },
      beforeUpdate: (desa) => {
        desa.kode_desa_kelurahan = desa.kode_desa_kelurahan.toUpperCase();
        desa.nama_desa_kelurahan = desa.nama_desa_kelurahan.toUpperCase();
      },
    },
  }
);

Desa.belongsTo(Kecamatan, {
  foreignKey: "id_kecamatan",
  as: "kecamatan",
});

module.exports = Desa;
