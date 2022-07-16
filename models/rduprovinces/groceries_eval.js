const mongoose = require('mongoose');

const groceriesevalSchema = new mongoose.Schema({
    shopid: {
        type: String
    },
    owner_skill:{
        type: Boolean
    },
    no_illegal:{
        type: Boolean
    },
    no_expire:{
        type: Boolean
    },
    good_store:{
        type: Boolean
    },
    result: {
        type: String
    },
    deval: {
        type: Date
    },
    byear: {
        type: String
    }
}, { timestamps: true });

module.exports = Grocerieseval = mongoose.model('groceryevals', groceriesevalSchema);