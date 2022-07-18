const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const chwrduplanSchema = new mongoose.Schema({
    chw_id:{
        type: ObjectId,
        ref: "changwats"
    },
    chw_name:{
        type: String
    },
    ytarget: {
        type: String
    },
    fileattach: {
        type: Array
    }
}, { timestamps: true });

module.exports = Chwrduplan = mongoose.model('chwrduplans', chwrduplanSchema);