var express = require('express');
var routes = require('./js/router');
var app = express();
var http = require('http');
var log4js = require('log4js');
// change logger to 'prod' to write in output.log file
var logger = log4js.getLogger('dev');

log4js.configure({
    appenders: [{type: 'console'},
                {type: 'file', filename: 'logs/output.log', category: 'prod'}]
});

// share logger with modules
module.exports.logger = logger;

function allowCrossDomain(req, res, next) {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Origin', "*");
  next();
}

app.use(express.static(__dirname+'/html'));
app.use(express.static(__dirname+'/js'));

app.use(allowCrossDomain);

app.use('/', routes);

var server = http.createServer(app);

server.listen('9093', function(){
  logger.debug("HomeRpi server started ! Listening on port 9093");
});