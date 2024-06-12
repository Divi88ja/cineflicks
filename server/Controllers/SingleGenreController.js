const MovieData = require('../Model/movieModel');
const GenreData = require('../Model/genreModel');

exports.getComedyGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Comedy' }).limit(30);
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

// exports.getRomanceGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Romance' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getHorrorGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Horror' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getThrillerGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Thriller' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getDramaGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Drama' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getActionGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Action' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getFantasyGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Fantasy' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getSciFiGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Sci-Fi' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getCrimeGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Crime' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// exports.getMysteryGenre = (req, res) => {
//     MovieData.find({ 'Genre': 'Mystery' }).limit(30)
//         .then((result) => {
//             return res.status(200).json(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
exports.getMysteryGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Mystery' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getRomanceGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Romance' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getDramaGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Drama' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getSciFiGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Sci-Fi' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getHorrorGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Horror' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getCrimeGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Crime' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getFantasyGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Fantasy' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getActionGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Action' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getThrillerGenre = async (req, res) => {
    try {
        const movies = await MovieData.find({ 'Genre': 'Thriller' }).limit(30);
        const movieIDs = movies.map(movie => movie.movieID);
        const genres = await GenreData.find({ genremovieID: { $in: movieIDs } });

        const result = movies.map(movie => {
            const matchedGenre = genres.find(genre => genre.genremovieID === movie.movieID);
            return {
                movieID: movie.movieID,
                MovieName: movie.MovieName,
                IMLink: movie.IMLink,
                Year: movie.Year,
                Rating: movie.Rating,
                Movie_link: movie.Movie_link,
                Description: movie.Description,
                Genre: matchedGenre ? matchedGenre.Genre : [],
            };
        });

        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
