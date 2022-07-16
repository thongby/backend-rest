const mongoose = require('mongoose');

const tamphoeSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    chw:{
        type: String
    },
    amphoe_id:{
        type: String
    },
    amphoe:{
        type: String
    },
    year: {
        type: String
    }
});

module.exports = Targetamphoe = mongoose.model('tamphoes', tamphoeSchema);