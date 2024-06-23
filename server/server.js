// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/database');
const bbmRoutes = require('./routes/bbmRoutes');
const jenisKendaraanRoutes = require('./routes/jenisKendaraanRoutes');
const mobilRoutes = require('./routes/mobilRoutes');
const path = require('path');

const app = express();
const PORT = 5050;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/uploads/mobil', express.static(path.join(__dirname, 'uploads/mobil')));

// Menggunakan routes
app.use('/api/bbm', bbmRoutes);
app.use('/api/jeniskendaraan', jenisKendaraanRoutes);
app.use('/api/mobil', mobilRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
