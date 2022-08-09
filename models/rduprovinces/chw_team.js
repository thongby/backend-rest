const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const chwteamSchema = new mongoose.Schema({
    chw_id: {
        type: ObjectId,
        ref: "changwat"
    },
    name: {
        type: String
    },
    position: {
        type: String
    },
    office_id:{
        type: ObjectId,
        ref: "healthoffices"
    },
    role:{
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    remark: {
        type: String
    }
}, { timestamps: true });

module.exports = Chwteam = mongoose.model('chw_teams', chwteamSchema);