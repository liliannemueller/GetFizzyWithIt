const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const barSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    placeId: {
        type: String,
        required: true,
        unique: true
    },
    ratings:{
        type: [Number],
        default: [],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const Bar = mongoose.model('Bar', barSchema);

module.exports = Bar;