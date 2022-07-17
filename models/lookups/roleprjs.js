const mongoose = require('mongoose');

const roleprjSchema = new mongoose.Schema({
    role_id:{
        type: String
    },
    role:{
        type: String
    }
}, { timestamps: true });

module.exports = Roleprj = mongoose.model('roleprjs', roleprjSchema);