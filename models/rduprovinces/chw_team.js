const mongoose = require('mongoose');

const chwteamSchema = new mongoose.Schema({
    chw_id: {
        type: String
    },
    chw: {
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

module.exports = Chwteam = mongoose.model('chw_teams', chwteamSchema);