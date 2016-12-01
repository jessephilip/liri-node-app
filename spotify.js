// import spotify spotify-web-api-node
var SpotifyWebApi = require("spotify-web-api-node");

// array to hold song data
var songs = [];

// array to hold list of artists per song
var artists = [];

// create spotifyApi consistent with documentation
var spotifyApi = new SpotifyWebApi();

function spotifySearch(searchTerm) {

	// search for tracks matching searchTerm
	spotifyApi.searchTracks("track:" + searchTerm)
		.then(function (data) {

			for (var i = 0; i < data.body.tracks.items.length; i++) {
				var song = {
					// get album
					album: data.body.tracks.items[i].album.name,

					//get song name
					name: data.body.tracks.items[i].name,

					//get preview_url
					url: data.body.tracks.items[i].preview_url
				};

				// get artists that sing song. get all artists.
				for (var inc = 0; inc < data.body.tracks.items[i].artists.length; inc++) {
					artists.push(data.body.tracks.items[i].artists[inc].name);

				}

				// put artists in song object
				song.artists = artists;

				// clear array
				artists = [];

				//push song object to array of songs 
				songs.push(song);
			}

			// print out collected data
			console.log(songs);

		}, function (err) {
			console.log('Something went wrong!', err);
		});
}

module.exports = spotifySearch;