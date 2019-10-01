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
                room.players.push(socket.id);
                rooms.free.splice(i, 1);
                rooms.full.push(room);
                return true;
            }
        })[0];
        if (!room) {
            return;
        }
        socket.join(room.id);
        sendRoomsInfo();
        const { players } = room;
        io.to(room.id).emit('start game', { roomId: room.id });
        socket.to(room.id).broadcast.emit('add players', { isFirstTurn: true, players });
        socket.emit('add players', { isFirstTurn: false, players });
    });

    socket.on('send move', ({from, to, roomId}) => socket.to(roomId).broadcast.emit('recieve move', {from, to}));

    socket.on('send board', ({roomId, board}) => {
        const room = rooms.full.filter(room => room.id === roomId)[0];
        if (room) {
            room.board = board;
        }
    });

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