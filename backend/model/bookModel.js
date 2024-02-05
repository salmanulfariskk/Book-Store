const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishYear: {
        type: Number,
        required: true,
    },
    timeStamp: {
        type: Date, // Corrected to use the Date type
        default: Date.now,
    }
});

module.exports = mongoose.model('Book', bookSchema);

