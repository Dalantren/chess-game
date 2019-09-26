import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragStart } from '@angular/cdk/drag-drop';
import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';
import { Cell } from './../../core/cell';
import { King, Queen, Bishop, Pawn, Knight, Rook } from './../figures/figures';
import { Player } from 'src/app/core/player';
import { LoggerService } from '../logger.service';

@Component({
    selector: 'chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit, OnChanges {

    private playerOne: Player;
    private playerTwo: Player;

    constructor(
        private board: ChessBoardService,
        private playersService: PlayersService,
        private logger: LoggerService
    ) {
        this.board.initBoard();
    }

    ngOnInit() {

        this.playerOne = this.playersService.add('white');
        this.playerTwo = this.playersService.add('black');

        this.board.entry[7][0].figure = new Rook(this.playerOne);
        this.board.entry[7][1].figure = new Knight(this.playerOne);
        this.board.entry[7][2].figure = new Bishop(this.playerOne);
        this.board.entry[7][3].figure = new King(this.playerOne);
        this.board.entry[7][4].figure = new Queen(this.playerOne);
        this.board.entry[7][5].figure = new Bishop(this.playerOne);
        this.board.entry[7][6].figure = new Knight(this.playerOne);
        this.board.entry[7][7].figure = new Rook(this.playerOne);
        this.board.entry[6].map((cell: Cell) => {
            cell.figure = new Pawn(this.playerOne);
        });


        this.board.entry[0][0].figure = new Rook(this.playerTwo);
        this.board.entry[0][1].figure = new Knight(this.playerTwo);
        this.board.entry[0][2].figure = new Bishop(this.playerTwo);
        this.board.entry[0][3].figure = new King(this.playerTwo);
        this.board.entry[0][4].figure = new Queen(this.playerTwo);
        this.board.entry[0][5].figure = new Bishop(this.playerTwo);
        this.board.entry[0][6].figure = new Knight(this.playerTwo);
        this.board.entry[0][7].figure = new Rook(this.playerTwo);
        this.board.entry[1].map((cell: Cell) => {
            cell.figure = new Pawn(this.playerTwo);
        });

        this.playerOne.startMove();
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
            this.logger.log(`Player ${figureFrom.player.id} move ${figureFrom.name}
                            from ${event.previousContainer.data.xLetter}${event.previousContainer.data.y + 1}
                            to ${event.container.data.xLetter}${event.container.data.y + 1}`);
            this.playersService.getNextPlayer(figureFrom.player).startMove();
        }
        this.board.clearAvailibles();
    }
}
