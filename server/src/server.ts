import * as express from "express";
import { Server as HttpServer } from "http";
import * as socketIo from "socket.io";

export class Server {
    public static readonly PORT: number = 3000;
    private app: express.Application;
    private server: HttpServer;
    private io: SocketIO.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.start();
    }

    public start(): void {
        this.server.listen(this.port, () => {
            // console.log("Running server on port %s", this.port);
       });
    }

    public getApp(): express.Application {
        return this.app;
    }

    public getSocket(): socketIo.Server {
      return this.io;
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = new HttpServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || Server.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }
}
