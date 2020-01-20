// const Express = require('express')();
// const server = require('http').Server(Express);
// import io = require('socket.io')(server);
// const EVENTS = require('../src/socketEventsList');
// import { EVENTS } from '../src/socketEventsList';


/*
const port = 3000;

const queue = [];

const rooms = {
    free: [],
    full: []
};

io.on(EVENTS.CONNECT, socket => {

    sendRoomsInfoTo(socket);

    socket.on(EVENTS.CREATE_ROOM, () => {
        const room = {
            id: randomStr(5),
            players: [{ id: socket.id, color: 'white' }]
        }
        rooms.free.push(room);
        socket.join(room.id);
        sendRoomsInfo();
    });

    socket.on(EVENTS.JOIN_ROOM, ({ roomId }) => {
        const room = rooms.free.find(room => room.id === roomId);
        if (!room) {
            return;
        }
        room.players.push({ id: socket.id, color: 'black' });
        rooms.free = rooms.free.filter(room => room.id !== roomId);
        rooms.full.push(room);
        socket.join(room.id);
        sendRoomsInfo();
        const { players } = room;
        io.to(room.id).emit(EVENTS.START_GAME, { roomId: room.id });
        io.to(room.id).emit(EVENTS.ADD_PLAYERS, { players });
        // socket.emit('add players', { isFirstTurn: false, players });
    });

    socket.on(EVENTS.SEND_MOVE, ({from, to, roomId}) => socket.to(roomId).broadcast.emit(EVENTS.RECIEVE_MOVE, {from, to}));

    socket.on(EVENTS.SEND_BOARD, ({roomId, board}) => {
        const room = rooms.full.filter(room => room.id === roomId)[0];
        if (room) {
            room.board = board;
        }
    });

    socket.on(EVENTS.DISCONNECT, () => {
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

function sendRoomsInfoTo(socket) {
    socket.emit(EVENTS.ROOMS_AVAILIBLE, getRoomsInfo());
}

function sendRoomsInfo(): void {
    io.emit(EVENTS.ROOMS_AVAILIBLE, getRoomsInfo());
}

function getRoomsInfo() {
    return {
        count: rooms.free.length + rooms.full.length,
        full: rooms.full,
        free: rooms.free
    }
}

server.listen(port, () => console.log(`start listening port ${port}`));
*/
