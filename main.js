// import twitterSearch function
var twitterApi = require("./twitter.js");

// import spotifySearch function
var spotifyApi = require("./spotify.js");

// import omdbSearch function
var omdbApi = require("./omdb.js");

// import inquirer
var inquirer = require("inquirer");

// import fs
var fs = require("fs");

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
            twitterApi();

            break;

        case "Spotify":
            inquirer.prompt([{
                type: "input",
                message: "Spotify this song: ",
                name: "song"
            }]).then(function (songify) {
                // if no song is provided then your program will default to "The Sign" by Ace of Base
                if (!songify.song) spotifyApi("track:The Sign artist:Ace of Base");

                // This will show the following information about the song in your terminal/bash window
                // Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from
                else spotifyApi("track:" + songify.song);
            });

            break;

        case "OMDB":
            inquirer.prompt([{
                type: "input",
                message: "Movify this movie: ",
                name: "movie"
            }]).then(function (movify) {
                // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
                if (!movify.movie) omdbApi("Mr. Nobody");
                else omdbApi(movify.movie);
            });

            break;

        case "Liri":
            // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
            // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
            // Feel free to change the text in that document to test out the feature for other commands.

            liri();

            break;

        default:
            console.log("default");
            break;
    }
});

function liri() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var command = data;
        var commandArray = data.split(",");

        switch (commandArray[0].toLowerCase()) {

            case "twitter":
                twitterApi();
                break;

            case "spotify":
                spotifyApi(commandArray[1]);
                break;

            case "omdb":
                omdbApi(commandArray[1]);
                break;

            default:
                console.log("Incorrect format. Correct format.");
                break;
        }
    });
}