var express = require('express');
var parser = require('body-parser');
var mysql = require('mysql');

var path = require('path');
var schema = require('../db/schema.js')

var app = express();

// middleware - parse JSON
app.use(parser.json());

// serve static client-facing files
app.use(express.static(path.resolve(__dirname, '../public')));

// spin up server
app.listen('3000', function() {
  console.log('Listening on port 3000');
});

// export app
module.exports = app;