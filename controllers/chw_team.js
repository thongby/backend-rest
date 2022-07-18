const Chwteam = require('../models/rduprovinces/chw_team');

// RDU changwat team (CRUD)
exports.listChwteam = async (req, res) => {
    try {
        const dataChwteam = await Chwteam.find({})
        res.send(dataChwteam)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.editChwteam = async (req,res) => {
    try {
        res.send('Edit changwat team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.addChwteam = async (req,res) => {
    try {
        res.send('Add changwat team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.deleteChwteam = async (req,res) => {
    try {
        res.send('Delete changwat team')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}
