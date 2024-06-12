const MovieData = require('../Model/movieModel');
const GenreData = require('../Model/genreModel');

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await MovieData.find().limit(10);
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

        console.log(result);

        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}