const app = require('express');

const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', socket => {
  console.log('a user connected');
});

module.exports = io;
