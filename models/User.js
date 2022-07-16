const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    enable: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now 
    }
}, { timestamps: true });

module.exports = User = mongoose.model('users', userSchema);