const Targetamphoe = require('../models/rduprovinces/tamphoe');

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