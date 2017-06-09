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

app.get('/', function (req, res) {
  res.send('index.html')
});

app.get(function (req, res) {
  res.send('404.html')
});

app.get('/about', function (req, res) {
  res.send('about.html')
});

app.get('/post', function (req, res) {
  res.send('post.html')
});

app.get('/contact', function (req, res) {
  res.send('contact.html')
});

// Listen for an application request on designated port
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.info('Magic happens on port 5000');
});
