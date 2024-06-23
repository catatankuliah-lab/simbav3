const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
const Kabupaten = require("./kabupatenModel");

const Kecamatan = sequelize.define(
  "kecamatan",
  {
    id_kecamatan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kode_kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_kecamatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_kabupaten_kota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Kabupaten,
        key: "id_kabupaten_kota",
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
    tableName: "kecamatan",
    hooks: {
      beforeCreate: (kecamatan) => {
        kecamatan.kode_kecamatan = kecamatan.kode_kecamatan.toUpperCase();
        kecamatan.nama_kecamatan = kecamatan.nama_kecamatan.toUpperCase();
      },
      beforeUpdate: (Mobil) => {
        kecamatan.kode_kecamatan = kecamatan.kode_kecamatan.toUpperCase();
        kecamatan.nama_kecamatan = kecamatan.nama_kecamatan.toUpperCase();
      },
    },
  }
);

Kecamatan.associate = function (models) {
  Kecamatan.belongsTo(models.KabupatenKota, {
    foreignKey: "id_kabupaten_kota",
    as: "kabupaten_kota",
  });
};

module.exports = Kecamatan;
