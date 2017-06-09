var path = require("path");
var express = require("express");
var fs = require('fs')
var logger = require("morgan");
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var auth =  require('./config.json');

// make a request app and create the server
var app = express();

// include client-side assets and use the bodyParser
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log requests to stdout and also
// log HTTP requests to a file in combined format
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// http GET default page at /
app.get("/", function (request, response) {
  response.sendFile('/assets/index.html');
});
// 404 for page not found requests
app.get(function (request, response) {
  response.sendFile('/assets/404.html');
});

// http GET /about
app.get("/about", function (request, response) {
  response.sendFile('/assets/about.html');
});

// http GET /about
app.get("/post", function (request, response) {
  response.sendFile('/assets/post.html');
});

// http GET /contact
app.get("/contact", function (req, res) {
  res.sendFile('/assets/contact.html');
});

// Listen for an application request on designated port
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.info('Magic happens on port 5000');
});
