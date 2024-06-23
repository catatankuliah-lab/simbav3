const User = require('../models/userModel');
const HakAkses = require('../models/hakAksesModel');

const addUser = async (req, res) => {
    const {
        id_hak_akses,
        username,
        password,
        nama_user,
        status_user
    } = req.body;

    try {
        const newUser = await User.create({
            id_hak_akses,
            username,
            password,
            nama_user,
            status_user
        });
        res.status(200).send(newUser);
    } catch (error) {
        console.error(req.body);
        res.status(500).send('Server Error');
    }
};

const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll({
            include: {
                model: HakAkses,
                as: 'hak_akses',
                attributes: ['deskripsi_hak_akses']
            }
        });
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addUser,
    getAllUser
};
