const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    genremovieID: {
        type: Number,
    },
    Genre: {
        type: Array,
    },

})

const GenreData = mongoose.model('genre_collections', genreSchema);

module.exports = GenreData;

