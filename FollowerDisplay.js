var request = require('request');
var cheerio = require('cheerio');

var url = "https://news.ycombinator.com/";

request(url, function (err, response, html) {
  
  if (!err) {
  	
  	var $ = cheerio.load(html);

    var followers = $('span.pagetop');
    var followersText = followers.text();
    console.log(followersText);
  }

});