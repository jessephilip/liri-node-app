// import twitter function
var twitter = require("./twitter.js");
var spotifyApi = require("./spotify.js");
var inquirer = require("inquirer");

// ask questions for user experience
inquirer.prompt([{
    type: "list",
    message: "What type of task do you want to perform?",
    choices: ["Twitter", "Spotify", "OMDB", "Liri"],
    name: "type"
}]).then(function (response) {

    // switch statement to take in commands
    switch (response.type) {
        case "Twitter":
            // This will show your last 20 tweets and when they were created in your terminal/bash window.  
            twitter();

            break;

        case "Spotify":
            inquirer.prompt([{
                type: "input",
                message: "Spotify this song: ",
                name: "song"
            }]).then(function (songify) {
                //console.log(songify.song);

                spotifyApi(songify.song);
            });
            // This will show the following information about the song in your terminal/bash window
            // Artist(s)
            // The song's name
            // A preview link of the song from Spotify
            // The album that the song is from
            // if no song is provided then your program will default to "The Sign" by Ace of Base

            break;

        case "OMDB":
                inquirer.prompt([{
                type: "input",
                message: "Movify this movie: ",
                name: "movie"
            }]).then(function (movify) {
                console.log(movify.movie);
            });
            // This will output the following information to your terminal/bash window:
            //     Title of the movie.
            //     Year the movie came out.
            //     IMDB Rating of the movie.
            //     Country where the movie was produced.
            //     Language of the movie.
            //     Plot of the movie.
            //     Actors in the movie.
            //     Rotten Tomatoes Rating.
            //     Rotten Tomatoes URL.
            //     If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            //     If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
            //     It's on Netflix!

            console.log("movie this");

            break;

        case "Liri":
            // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
            //     It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
            //     Feel free to change the text in that document to test out the feature for other commands.

            console.log("do what it says");

            break;

        default:
            console.log("default");
            break;
    }
});