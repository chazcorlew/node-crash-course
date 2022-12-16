const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rantSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true });

const Rant = mongoose.model('Rant', rantSchema);
module.exports = Rant;

