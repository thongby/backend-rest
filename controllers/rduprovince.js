const Changwat = require('../models/locations/changwat');
const Amphoe = require('../models/locations/amphoe');
const Tambon = require('../models/locations/tambon');
const Targetamphoe = require('../models/rduprovinces/tamphoe');
const Chwteam = require('../models/rduprovinces/chw_team');
const Ampteam = require('../models/rduprovinces/amp_team');
const Tgroceries = require('../models/rduprovinces/tgroceries');
const Chwprofile = require('../models/rduprovinces/chwprofile')

// Location data ------------------------------------
// List all changwat data
exports.listChangwat = async (req, res) => {
    try {
        const dataChangwat = await Changwat.find({})
        res.send(dataChangwat)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

// List all amphoe data
exports.listAmphoe = async (req, res) => {
    try {
        const dataAmphoe = await Amphoe.find({})
        res.send(dataAmphoe)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

// List all tambon data
exports.listTambon = async (req, res) => {
    try {
        const dataTambon = await Tambon.find({})
        res.send(dataTambon)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}
//-----------------------------------------------

// RDU changwat data 
// Changwat profile data (UD)
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

// RDU plan

// RDU changwat team (CRUD)
exports.listChwteam = async (req, res) => {
    try {
        const dataChwteam = await Chwteam.find({})
        res.send(dataChwteam)
        //res.send('OK')
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

// RDU amphoe data

// Target amphoe data (CRUD)
exports.listTamphoe = async (req, res) => {
    try {
        const dataTamphoe = await Targetamphoe.find({})
        res.send(dataTamphoe)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.editTamphoe = async (req,res) => {
    try {
        res.send('Edit target amphoe')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.addTamphoe = async (req,res) => {
    try {
        res.send('Add target amphoe')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.deleteTamphoe = async (req,res) => {
    try {
        res.send('Delete target amphoe')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

// Target groceries data (CRUD)
exports.listTgroceries = async (req, res) => {
    try {
        const dataTgroceries = await Tgroceries.find({})
        res.send(dataTgroceries)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.editTgrocery = async (req,res) => {
    try {
        res.send('Edit target grocery')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.addTgrocery = async (req,res) => {
    try {
        res.send('Add target grocery')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}

exports.deleteTgrocery = async (req,res) => {
    try {
        res.send('Delete target grocery')
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error!!!')
    }
}


// Develop groceries data

// Evaluate groceries

// -------------------
