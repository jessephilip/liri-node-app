// import twitter npm package
var Twitter = require("twitter");

// import twitter api keys
var keys = require("./keys.js");

// set up Twitter object with api keys
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

// array to hold tweets
var tweetsArray = [];

function twitterSearch() {
    client.get("statuses/user_timeline", {
        user_id: 520006947
    }, function (error, tweets, response) {

        for (var i = 0; i < tweets.length; i++) {
            
            // only supposed to return twenty tweets so break if i = 20
            if (i === 20) break;
            
            // capture tweets in tweet object
            var tweet = {
                text: tweets[i].text,
                time: tweets[i].created_at
            };

            // push tweets to array 
            tweetsArray.push(tweet);
        }

        // print out all tweets
        for (var i = 0; i < tweetsArray.length; i++) {
            console.log("==============================================================================================================\n");
            console.log(i + 1 + ". " + tweetsArray[i].time);
            console.log(tweetsArray[i].text + "\n");
        }

    });
}

module.exports = twitterSearch;