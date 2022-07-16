const mongoose = require('mongoose');

const chwrduplanSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    chw_name:{
        type: String
    },
    ytarget: {
        type: String
    },
    fileattach: {
        type: String
    }
});

module.exports = Chwrduplan = mongoose.model('chwrduplans', chwrduplanSchema);