const mongoose = require('mongoose');

const chwrdutacticSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    chw_name:{
        type: String
    },
    tacticid:{
        type: String
    },
    ytarget: {
        type: String
    }
});

module.exports = Chwrdutactic = mongoose.model('chwrdutactics', chwrdutacticSchema);