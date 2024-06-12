const MovieData = require('../Model/movieModel');
const GenreData = require('../Model/genreModel');

var genre1, genre2 = '';

exports.postGenre = (req, res) => {
    genre1 = req.body.genre1;
    genre2 = req.body.genre2;
    return res.status(200).json({ "POST GENRES ": [genre1, genre2] })
}


exports.getGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ $and: [{ 'Genre': genre1 }, { 'Genre': genre2 }] }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });
        let result = movies.map(movie => {
            let matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : []
            };
        });

        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}