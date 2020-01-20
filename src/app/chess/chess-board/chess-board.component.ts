import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';

import { Cell, Player } from './../../core';

import { ChessBoardService } from '../services/chess-board.service';
import { PlayersService } from '../services/players.service';
import { LoggerService } from '../services/logger.service';
import { WebSocketService } from './../../web-socket.service';
import { ActivatedRoute } from '@angular/router';
import { EVENTS } from '../../../socketEventsList';

@Component({
    selector: 'chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent implements OnInit {

    players: [Player, Player];
    private roomId: string;

    constructor(
        private board: ChessBoardService,
        private playersService: PlayersService,
        private logger: LoggerService,
        private socket: WebSocketService,
        private route: ActivatedRoute
    ) {
        this.board.initBoard();
        this.route.url.subscribe(url => this.roomId = url[1].path);
    }

    ngOnInit() {
        this.socket.emit(EVENTS.SEND_BOARD, { roomId: this.roomId, board: this.board.entry });

        this.socket.listen(EVENTS.RECIEVE_MOVE).subscribe( ({ from, to }) => {
            const cellFrom = this.board.cell(from);
            const cellTo = this.board.cell(to);
            cellTo.availible = true;
            if (this.drop(cellFrom, cellTo)) {
                this.playersService.me.startMove();
            }
        });
    }

    setAvailibleMoves(event: CdkDragStart) {
        const cell: Cell = event.source.dropContainer.data;
        const { figure } = cell;
        if (!this.playersService.me.canMove() || figure.color !== this.playersService.me.color) {
            return false;
        }
        figure.setAvailibleMoves(this.board);
    }

    makeMove(event: CdkDragDrop<Cell>) {
        const from: Cell = event.previousContainer.data;
        const to: Cell = event.container.data;
        if (this.drop(from, to)) {
            this.playersService.me.endMove();
            this.socket.emit(EVENTS.SEND_MOVE, { from: from.coords, to: to.coords, roomId: this.roomId });
            this.socket.emit(EVENTS.SEND_BOARD, { roomId: this.roomId, board: this.board.entry });
        }
        console.log(this.playersService.me);
    }

    drop(from: Cell, to: Cell): boolean {
        if (to.availible) {
            const { figure } = from;
            this.board.makeMove(from, to);
            this.logger.logMove(from, to);
            figure.endMove();
            this.board.clearAvailibles();
            return true;
        }
        console.log(this.playersService.me);
        this.board.clearAvailibles();
        return false;
    }
}
