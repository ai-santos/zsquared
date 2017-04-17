var express = require('express');
var index = require('./routes/index');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var server = express();

//middleware
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');
server.use(logger('dev'));
server.use(express.static(path.join(__dirname + '/public')));
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', index);

server.listen(process.env.PORT || 4000);

module.exports = server;