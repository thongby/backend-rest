const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const ampteamSchema = new mongoose.Schema({
    chw_id: {
        type: ObjectId,
        ref: "changwat"
    },
    amp_id: {
        type: ObjectId,
        ref: "amphoes"
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

module.exports = Ampteam = mongoose.model('amp_teams', ampteamSchema);