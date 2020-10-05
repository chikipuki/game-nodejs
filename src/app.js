var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./config/db')

var playerRoutes = require('./routes/player');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', playerRoutes);

module.exports = app;
