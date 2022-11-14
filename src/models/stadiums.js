const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stadiumSchema = new Schema({
    date:{
        type: Date,
        default: Date.now,
    },
    name:{
        type: String,
        trim: true,
    },
    team:{
        type: String,
        trim: true,
    },
    album:{
        type: String,
        trim: true,
    },
    imagen:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Stadiums',stadiumSchema);
