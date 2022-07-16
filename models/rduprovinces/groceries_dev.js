const mongoose = require('mongoose');

const groceriesdevSchema = new mongoose.Schema({
    shopid: {
        type: String
    },
    datacollect:{
        type: Boolean
    },
    datafeedback:{
        type: Boolean
    },
    datatransfer:{
        type: Boolean
    },
    surveil:{
        type: Boolean
    },
    lawenforce: {
        type: Boolean
    },
    tamfund: {
        type: Boolean
    },
    drugstore: {
        type: Boolean
    },
    byear: {
        type: String
    }
}, { timestamps: true });

module.exports = Groceriesdev = mongoose.model('grocerydevs', groceriesdevSchema);