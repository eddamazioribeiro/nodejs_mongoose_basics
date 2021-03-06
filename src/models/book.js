const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    slug: {
        type: String,
        unique: true,
        index: true,
        trim: true,
        lowercase: true
    },
    title: String,
    author: String,
    category: String
});

module.exports = mongoose.model('book', bookSchema);