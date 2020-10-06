var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')

require('./config/db')

var playerRoutes = require('./routes/gameRoutes');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', playerRoutes);

module.exports = app;
