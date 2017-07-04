var twit = require('twit');  
var Twitter = new twit(require('./config.js'));
var currentTweetIndex = 0;
var tweets = require('./tweets.json');

function postNextTweet() {
    if(currentTweetIndex >= tweets.length){
        console.log("Out of tweets after " + tweets.length + " tweets, starting over");
        currentTweetIndex = 0;
    }
    var currentTweet = tweets[currentTweetIndex++];

    console.log("Posting tweet '" + currentTweet + "'");
    Twitter.post('statuses/update', { status: currentTweet }, function(err, data, response) {
        console.log(data);
    });
}

setInterval(postNextTweet, 1000 * 60 * 10);
