var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.port || 8080;

server.listen(port, function(){
  console.log('server listening on port %d', port);
});

app.use(express.static(__dirname));