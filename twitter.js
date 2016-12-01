// import twitter npm package
var Twitter = require("twitter");
var keys = require("./keys.js");

var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});

var tweetsArray = [];

var twitterSearch = function twitterSearch() {
    client.get("statuses/user_timeline", {
        user_id: 520006947
    }, function (error, tweets, response) {
        //console.log(JSON.stringify(tweets, null, 2));

        for (var i = 0; i < tweets.length; i++) {
            var tweet = {
                text: tweets[i].text,
                time: tweets[i].created_at
            };

            tweetsArray.push(tweet);
        }


        console.log(tweetsArray);

    });
}

module.exports = twitterSearch;