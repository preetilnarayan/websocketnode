var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, function(){
  console.log("Port 4000 working...");
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', (socket) => {
  console.log('Made socket connection');
});