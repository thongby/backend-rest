const Ampteam = require('../models/rduprovinces/amp_team');

// RDU amphoe team (CRUD)
exports.listAmpteam = async (req, res) => {
    try {
        const dataAmpteam = await Ampteam.find({})
        res.send(dataAmpteam)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.editAmpteam = async (req,res) => {
    try {
        res.send('Edit amphoe team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.addAmpteam = async (req,res) => {
    try {
        res.send('Add amphoe team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.deleteAmpteam = async (req,res) => {
    try {
        res.send('Delete amphoe team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}