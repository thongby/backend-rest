const Chwprofile = require('../models/rduprovinces/chwprofile');

// RDU changwat data 
// Changwat profile data (RU)
exports.listChwprofile = async (req, res) => {
    try {
        const dataChwprofile = await Chwprofile.find({})
        res.send(dataChwprofile)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.editChwprofile = async (req,res) => {
    try {
        res.send('Edit changwat data')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}