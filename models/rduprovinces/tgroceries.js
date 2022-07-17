const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const tgroceriesSchema = new mongoose.Schema({
    chw_id:{
        type: ObjectId,
        ref: "changwats"
    },
    amp_id:{
        type: ObjectId,
        ref: "amphoes"
    },
    tam_id:{
        type: ObjectId,
        ref: "tambons"
    },
    shop_name:{
        type: String
    },
    owner_name:{
        type: String
    },
    address:{
        type: String
    },
    tel:{
        type: String
    },
    result: {
        type: Boolean
    },
    lastevaldate: {
        type: Date
    },
    byearlasteval: {
        type: String
    },
    remark: {
        type: String
    }
}, { timestamps: true });

module.exports = Tgroceries = mongoose.model('tgroceries', tgroceriesSchema);