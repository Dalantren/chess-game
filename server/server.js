const Express = require('express')();
const server = require('http').Server(Express);
const io = require('socket.io')(server);

const port = 3000;

const queue = [];

io.on('connection', socket => {
    console.log(`New user connected`);
    socket.emit('test event', 'here is your data');
    io.emit('test event', 'aaaaaaa');

    socket.on('enter queue', data => {
        queue.push(socket);
        if (queue.length >= 2) {
            playersSockets = queue.splice(0, 2);
            playersSockets.map(socket => socket.emit('start a new game'));
        } else {
            // socket.emit('list', false);
        }
    });
});

server.listen(port, () => console.log(`start listening port ${port}`));