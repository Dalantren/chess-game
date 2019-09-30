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

    sendRoomsInfo(socket);

    socket.on(`create room`, () => {
        const room = {
            id: randomStr(5),
            players: [socket.id]
        }
        rooms.free.push(room);
        socket.join(room.id);
        sendRoomsInfo();
    });

    socket.on(`join room`, ({ roomId }) => {
        const room = rooms.free.filter((room, i) => {
            if (room.id === roomId) {
                socket.join(room.id);
                room.players.push(socket.id);
                rooms.free.splice(i, 1);
                rooms.full.push(room);
                return room;
            }
        })[0];
        const roomsInfo = sendRoomsInfo();
        const { players } = room;
        console.log(rooms);
        socket.to(room.id).emit('start game', { roomsInfo, roomId: room.id });
        socket.broadcast.emit('add players', { isFirstTurn: true, players });
        socket.emit('add players', { isFirstTurn: false, players });
    });

    socket.on('send move', move => socket.broadcast.emit('recieve move', move));

    socket.on('disconnecting', () => {
        const userRooms = Object.keys(socket.rooms).splice(1);
        userRooms.forEach(roomId => {
            rooms.free.concat(rooms.full)
                .map((room, i) => {
                    if (room.id === roomId) {
                        io.in(roomId).emit('room disconnect', { id: socket.id, roomId })
                        if (i > rooms.free.length - 1) {
                            rooms.full.splice(i - rooms.free.length - 1, 1);
                        } else {
                            rooms.free.splice(i);
                        }
                    }
                });
        });
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
    return Math.random().toString(36).substring(2, 2 + length);
}

const sendRoomsInfo = (socket = null) => {
    const roomsInfo = {
        count: rooms.free.length + rooms.full.length,
        full: rooms.full,
        free: rooms.free
    };
    if (socket) {
        socket.emit(`rooms availible`, roomsInfo);
    } else {
        io.emit(`rooms availible`, roomsInfo);
    }
    return roomsInfo;
}

server.listen(port, () => console.log(`start listening port ${port}`));