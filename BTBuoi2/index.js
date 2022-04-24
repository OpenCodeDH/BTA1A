

var http = require('http');

const config = require('./config/config')

 http.createServer(config.test).listen(config.port,console.log('connected locallhost:', config.port))