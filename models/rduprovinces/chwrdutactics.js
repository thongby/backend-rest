const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const chwrdutacticSchema = new mongoose.Schema({
    chw_id:{
        type: ObjectId,
        ref: "changwats"
    },
    chw_name:{
        type: String
    },
    tacticid:{
        type: ObjectId,
        ref:'chwtactics'
    },
    ytarget: {
        type: String
    }
}, { timestamps: true });

module.exports = Chwrdutactic = mongoose.model('chwrdutactics', chwrdutacticSchema);