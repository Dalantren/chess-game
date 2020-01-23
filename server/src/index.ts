import { Socket } from "socket.io";
import { EVENTS } from "./models/events";
import { Server } from "./server";
const server = new Server();
const app = server.getApp();
const io = server.getSocket();

const queue = [];

interface IPlayer {
    id: string;
    color: string;
}
interface IRoom {
    id: string;
    players: IPlayer[];
    board?: string[][];
}

const rooms: { free: IRoom[], full: IRoom[] } = {
    free: [],
    full: []
};

io.on(EVENTS.CONNECT, (socket: Socket) => {

    sendRoomsInfoTo(socket);

    socket.on(EVENTS.CREATE_ROOM, () => {
        const room = {
            id: randomStr(5),
            players: [{ id: socket.id, color: "white" }]
        };
        rooms.free.push(room);
        socket.join(room.id);
        sendRoomsInfo();
    });

    socket.on(EVENTS.JOIN_ROOM, ({ roomId }) => {
        const joinedRoom = rooms.free.find((r) => r.id === roomId);
        if (!joinedRoom) {
            return;
        }
        joinedRoom.players.push({ id: socket.id, color: "black" });
        rooms.free = rooms.free.filter((room) => room.id !== roomId);
        rooms.full.push(joinedRoom);
        socket.join(joinedRoom.id);
        sendRoomsInfo();
        const { players } = joinedRoom;
        io.to(joinedRoom.id).emit(EVENTS.START_GAME, { roomId: joinedRoom.id });
        io.to(joinedRoom.id).emit(EVENTS.ADD_PLAYERS, { players });
        // socket.emit('add players', { isFirstTurn: false, players });
    });

    socket.on(EVENTS.SEND_MOVE,
        ({from, to, roomId}) => socket.to(roomId).broadcast.emit(EVENTS.RECIEVE_MOVE, {from, to}));

    socket.on(EVENTS.SEND_BOARD, ({roomId, board}) => {
        const room = rooms.full.filter((r) => r.id === roomId)[0];
        if (room) {
            room.board = board;
        }
    });

    socket.on(EVENTS.DISCONNECT, () => {
        const userRooms = Object.keys(socket.rooms).splice(1);
        userRooms.forEach((roomId) => {
            rooms.free.concat(rooms.full)
                .map((room, i) => {
                    if (room.id === roomId) {
                        io.in(roomId).emit("room disconnect", { id: socket.id, roomId });
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
};

function sendRoomsInfoTo(socket: Socket) {
    socket.emit(EVENTS.ROOMS_AVAILIBLE, getRoomsInfo());
}

function sendRoomsInfo(): void {
    io.emit(EVENTS.ROOMS_AVAILIBLE, getRoomsInfo());
}

function getRoomsInfo() {
    return {
        count: rooms.free.length + rooms.full.length,
        free: rooms.free,
        full: rooms.full
    };
}

export { app };
