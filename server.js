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
app.use(express.static('/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listen for an application request on designated port
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.info('Magic happens on port 5000');
});

// http GET default page at /
app.get('/', function (req, res) {
  return res.send('/index.html');
});
// 404 for page not found requests
app.get(function (req, res) {
  return res.send('/404.html');
});

// http GET /about
app.get('/about', function (req, res) {
  return res.send('/about.html');
});

// http GET /about
app.get('/post', function (req, res) {
  return res.send('/post.html');
});

// http GET /contact
app.get('/contact', function (req, res) {
  return res.send('/contact.html');
});
