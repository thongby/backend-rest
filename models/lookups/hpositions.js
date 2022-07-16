const mongoose = require('mongoose');

const hpositionSchema = new mongoose.Schema({
    hposition_id:{
        type: String
    },
    hposition:{
        type: String
    }
});

module.exports = Hposition = mongoose.model('hpositions', hpositionSchema);