// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/database');
const provinsiRoutes = require('./routes/provinsiRoutes');
const kabupatenRoutes = require('./routes/kabupatenRoutes');
const kecamatanRoutes = require('./routes/kecamatanRoutes');
const hakAksesRoutes = require('./routes/hakAksesRoutes');
const userRoutes = require('./routes/userRoutes');
const kantorCabangRoutes = require('./routes/kantorCabangRoutes');
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
app.use('/api/provinsi', provinsiRoutes);
app.use('/api/kabupaten', kabupatenRoutes);
app.use('/api/kecamatan', kecamatanRoutes);
app.use('/api/hakakses', hakAksesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/kantorcabang', kantorCabangRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
