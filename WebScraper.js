var request = require('request');
var cheerio = require('cheerio');

request('https://www.instagram.com/ran_crump/', function (error, response, html) {

	console.log("error: " + error);

  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});