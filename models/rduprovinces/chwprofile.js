const mongoose = require('mongoose');

const chwprofileSchema = new mongoose.Schema({
    region: {
        type: String
    },
    chw_id:{
        type: String
    },
    chw_name:{
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    amphoecnt: {
        type: Number
    },
    tamboncnt: {
        type: Number
    },
    moobancnt: {
        type: Number
    },
    ytargetrdu: {
        type: String
    },
    tamphoecnt: {
        type: String
    },
    tgroceriescnt: {
        type: String
    },
    rduhospitalcriteria: {
        type: Boolean
    },
    rdupcucriteria: {
        type: Boolean
    },
    tamphoecriteria: {
        type: Boolean
    },
    chwrdupass: {
        type: Boolean
    },
    hosmophsp: {
        type: Number
    },
    hosmophnonsp: {
        type: Number
    },
    hosuniversity: {
        type: Number
    },
    hosinterior: {
        type: Number
    },
    hosmilitary: {
        type: Number
    },
    hosothers: {
        type: Number
    },
    healthprimary: {
        type: Number
    },
    drugstorecat1: {
        type: Number
    },
    drugstorecat2: {
        type: Number
    },
    drugstorecat3: {
        type: Number
    },
    drugstorecat4: {
        type: Number
    },
    shop711: {
        type: Number
    },
    groceries: {
        type: Number
    },
    factory: {
        type: Number
    },
    schoolgov: {
        type: Number
    },
    schoolprivate: {
        type: Number
    },
    schoollocal: {
        type: Number
    },
    schoolothers: {
        type: Number
    },
    others: {
        type: String
    }
},{ timestamps: true });

module.exports = Chwprofile = mongoose.model('chwprofiles', chwprofileSchema);