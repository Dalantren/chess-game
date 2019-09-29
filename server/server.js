const Express = require('express')();
const server = require('http').Server(Express);
const io = require('socket.io')(server);

const port = 3000;

const queue = [];

const rooms = {
    free: [],
    full: []
};

io.on('connection', socket => {
    console.log(`New user connected`);
    sendRoomsInfo();

    socket.on(`create room`, data => {
        const roomId = randomStr(5);
        rooms.free.push(roomId);
        socket.join(roomId);
        const roomsInfo = sendRoomsInfo();
        io.in(roomId).emit('new room', { roomsInfo, roomId });
    });

    socket.on(`join room`, ({ roomId }) => {
        const roomIndex = rooms.free.indexOf(roomId);
        if (roomIndex > -1) {
            rooms.free.splice(roomIndex, 1);
            rooms.full.push(roomId);
        }
        sendRoomsInfo();
        io.in(roomId).emit('starg game', { roomsInfo, roomId });
    });

    socket.on('send move', ({ board, roomId }) => {
        const winner = null;
        // checkWinner
        const nextMoveInfo = { cellFrom, cellTo, winner };
        if (!winner) {
            socket.broadcast.to(roomId).emit('recieve move', nextMoveInfo);
        } else {
            io.in(roomId).emit('recieve move to winner', nextMoveInfo);
        }
    })

    socket.on('disconnecting', () => {
        const someRooms = Object.keys(socket.rooms);
        console.log(someRooms);
        const roomId = someRooms[1] || null;
        if (roomId) {
            roomIndex = rooms.full.indexOf(roomId);
            if (roomIndex > -1) {
                rooms.full.splice(roomIndex, 1);
            }
            io.in(roomId).emit('room disconnect', { id: socket.id, roomId })
        }
        sendRoomsInfo();
    });

    socket.on('join queue', data => {
        queue.push({ id : data.id, socket });
        if (queue.length >= 2) {
            const roomId = randomStr();
            activeRooms.push(roomId);
            const players = queue.splice(0, 2);
            players.map(({ socket }) => {
                socket.join(roomId)
            });
            io.to(roomId)
                .emit('start a new game', { roomId: roomId })
                .emit('add players', [players[0].id, players[1].id]);
        }
    });
    //socket.on('')
});

const randomStr = (length = 15) => {
    return Math.random().toString(36).substring(2, 2 + length / 2) + Math.random().toString(36).substring(2, 2 + length / 2);
}

const sendRoomsInfo = () => {
    const roomsInfo = {
        roomsCount: rooms.free.length + rooms.full.length,
        fullRooms: rooms.full,
        emptyRooms: rooms.free
    };
    io.emit(`rooms availible`, roomsInfo);
    return roomsInfo;
}

server.listen(port, () => console.log(`start listening port ${port}`));