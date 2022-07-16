const mongoose = require('mongoose');

const tgroceriesSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    chw_name:{
        type: String
    },
    amp_id:{
        type: String
    },
    amp_name:{
        type: String
    },
    tam_id:{
        type: String
    },
    tam_name:{
        type: String
    },
    shopid: {
        type: String
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
    }
}, { timestamps: true });

module.exports = Tgroceries = mongoose.model('tgroceries', tgroceriesSchema);