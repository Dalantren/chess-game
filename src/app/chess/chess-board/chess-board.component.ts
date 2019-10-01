import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';

import { Cell } from './../../core/cell';

import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';
import { LoggerService } from '../logger.service';
import { WebSocketService } from './../../web-socket.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent implements OnInit {

    private roomId: string;

    constructor(
        private board: ChessBoardService,
        private playersService: PlayersService,
        private logger: LoggerService,
        private socket: WebSocketService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.board.initBoard();
        this.route.url.subscribe(url => this.roomId = url[1].path);
    }

    ngOnInit() {
        this.socket.listen('add players').subscribe(({ isFirstTurn, players }) => {
            players.map((socketId: string) => this.playersService.add(socketId));
            if (isFirstTurn) {
                this.playersService.me = this.playersService.players[0];
                this.playersService.me.startMove();
            } else {
                this.playersService.me = this.playersService.players[1];
            }
            console.log(this.board);
        });

        this.socket.emit('send board', {roomId: this.roomId, board: this.board.entry });

        this.socket.listen('recieve move').subscribe( ({ from, to }) => {
            const cellFrom = this.board.cell(from);
            const cellTo = this.board.cell(to);
            cellTo.availible = true;
            if (this.drop(cellFrom, cellTo)) {
                this.playersService.me.startMove();
            }
        });
    }

    setAvailibleMoves(event: CdkDragStart) {
        const cell = event.source.dropContainer.data;
        const { figure } = cell;
        if (!figure.player.canMove()) {
            return false;
        }
        figure.setAvailibleMoves(this.board);
    }

    makeMove(event: CdkDragDrop<Cell>) {
        const from: Cell = event.previousContainer.data;
        const to: Cell = event.container.data;
        if (this.drop(from, to)) {
            this.playersService.me.endMove();
            this.socket.emit('send move', { from: from.coords, to: to.coords, roomId: this.roomId });
            this.socket.emit('send board', {roomId: this.roomId, board: this.board.entry });
            console.log(this.board);
            console.log(from);
            console.log(to);
        }
    }

    drop(from: Cell, to: Cell): boolean {
        if (from !== to && to.availible) {
            this.board.changeFigures(from, to);
            this.logger.logMove(from, to, to.figure);
            this.board.clearAvailibles();
            return true;
        }
        this.board.clearAvailibles();
        return false;
    }
}
