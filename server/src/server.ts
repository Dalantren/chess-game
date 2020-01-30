import * as express from "express";
import { createServer, Server as HttpServer } from "http";
import * as socketIo from "socket.io";

export class Server {
    public static readonly PORT: number = 3000;
    private app: express.Application;
    private server: HttpServer;
    private io: SocketIO.Server;
    private port: string | number;

    constructor() {
        this.app = express.application;
        this.port = process.env.PORT || Server.PORT;
        this.server = createServer(this.app);
        this.io = socketIo.default(this.server);
        this.start();
    }

    public start(): void {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port);
       });
    }

    public getApp(): express.Application {
        return this.app;
    }

    public getSocket(): socketIo.Server {
      return this.io;
    }
}
