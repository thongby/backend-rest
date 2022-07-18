const Tgroceries = require('../models/rduprovinces/tgroceries');

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