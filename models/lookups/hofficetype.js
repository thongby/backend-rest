const mongoose = require('mongoose');

const hofficeSchema = new mongoose.Schema({
    hofficetype_id:{
        type: String
    },
    hofficetype:{
        type: String
    }
});

module.exports = Hofficetype = mongoose.model('healthofficetypes', hofficeSchema);