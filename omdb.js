// import omdbapi
var omdb = require("omdbapi");

// function to perform omdb movie search
function omdbSearch(searchTerm) {

    // search for movie by user's input'
    omdb.search({
        search: searchTerm
    }).then(function (res) {
        // get first result
        var id = res["0"].imdbid;
        
        // perform secondary search via imdbID
        omdb.get({
            id: id,
            plot: "full",
            tomatoes: true
        }).then(function (response) {
            var movie = {
                // Title of the movie.
                title: response.title,

                // Year the movie came out.
                title: response.year,

                // IMDB Rating of the movie.
                imdb_rating: response.imdbrating,

                // Country where the movie was produced.
                country: response.country,

                // Language of the movie.
                language: response.language,

                // Plot of the movie.
                plot: response.plot,

                // Rotten Tomatoes Rating.
                tomato: response.tomatometer,

                // Rotten Tomatoes URL.
                tomatoUrl: response.tomatourl

            };

            // Actors in the movie.
            var actors = [];

            // loop through objects and push into actors array
            for (var key in response.actors) {
                actors.push(response.actors[key]);
            }

            // add actors to movie object
            movie.actors = actors;

            // print out selected movie details from movie object
            console.log(movie);
        })
    }).catch(console.error.bind(console));

}

module.exports = omdbSearch;