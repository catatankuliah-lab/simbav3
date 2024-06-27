const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u1561176_simbav2', 'u1561176_pineapple', 'Nanas30037', {
  host: 'kalaitu.org',
  dialect: 'mysql'
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
