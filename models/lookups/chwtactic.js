const mongoose = require('mongoose');

const chwtacticSchema = new mongoose.Schema({
    tacticid:{
        type: String
    },
    tacticname: {
        type: String
    },
    shorttactic: {
        type: String
    }
});

module.exports = Chwtactic = mongoose.model('chwtactics', chwtacticSchema);