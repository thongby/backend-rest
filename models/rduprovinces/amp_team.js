const mongoose = require('mongoose');

const ampteamSchema = new mongoose.Schema({
    chw_id: {
        type: String
    },
    chw: {
        type: String
    },
    amp_id: {
        type: String
    },
    amp: {
        type: String
    },
    name: {
        type: String
    },
    position: {
        type: String
    },
    office_id:{
        type: String
    },
    office:{
        type: String
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
});

module.exports = Ampteam = mongoose.model('amp_teams', ampteamSchema);