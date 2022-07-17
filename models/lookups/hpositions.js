const mongoose = require('mongoose');

const hpositionSchema = new mongoose.Schema({
    hposition_id:{
        type: String
    },
    hposition:{
        type: String
    }
},{ timestamps: true });

module.exports = Hposition = mongoose.model('hpositions', hpositionSchema);