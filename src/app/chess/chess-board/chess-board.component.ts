import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart } from '@angular/cdk/drag-drop';
import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';
import { Cell } from './../../core/cell';
import { LoggerService } from '../logger.service';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
    selector: 'chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit, OnChanges, AfterViewInit {

    constructor(
        private board: ChessBoardService,
        private playersService: PlayersService,
        private logger: LoggerService,
        private socket: WebSocketService
    ) {
        this.board.initBoard();
    }

    ngOnInit() {
        this.socket.listen('add players').subscribe(playersID => {
            playersID.map((id: number) => this.playersService.add(id));
        });
    }

    ngAfterViewInit(): void {
        this.playersService.players[0].startMove();
    }


    ngOnChanges(changes: SimpleChanges) {
    }

    setAvailibleMoves(event: CdkDragStart) {
        const cell = event.source.dropContainer.data;
        const { figure } = cell;
        if (!figure.player.canMove()) {
            return false;
        }
        figure.setAvailibleMoves(cell, this.board);
    }

    drop(event: CdkDragDrop<Cell>) {
        if (event.previousContainer !== event.container && event.container.data.availible) {
            const figureFrom = event.previousContainer.data.figure;
            const figureTo = event.container.data.figure;
            if (figureTo && figureFrom.player.id !== figureTo.player.id) {
                figureTo.player.felledFigures.push(figureTo);
                figureTo.player.figures = figureTo.player.figures.filter(figure => figureTo.id !== figure.id);
            }
            event.container.data.figure = figureFrom;
            event.previousContainer.data.figure = null;

            figureFrom.firstMove = false;

            figureFrom.player.endMove();
            this.logger.logMove(event.previousContainer.data, event.container.data, figureFrom);
            this.playersService.getNextPlayer(figureFrom.player).startMove();
        }
        this.board.clearAvailibles();
    }
}
