import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChessBoardService } from '../chess-board.service';
import { PlayersService } from '../players.service';
import { Cell } from './../../core/cell';
import { King, Queen, Bishop, Pawn, Knight, Rook } from './../figures/figures';

@Component({
    selector: 'app-chess-board',
    templateUrl: './chess-board.component.html',
    styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit, OnChanges {

    constructor(private board: ChessBoardService, private playersService: PlayersService) {
        this.board.initBoard();
    }

    ngOnInit() {

        const player1 = this.playersService.add('black');
        const player2 = this.playersService.add('white');

        this.board.entry[0][0].figure = new Rook(player1, this.board);
        this.board.entry[0][1].figure = new Knight(player1, this.board);
        this.board.entry[0][2].figure = new Bishop(player1, this.board);
        this.board.entry[0][3].figure = new King(player1, this.board);
        this.board.entry[0][4].figure = new Queen(player1, this.board);
        this.board.entry[0][5].figure = new Bishop(player1, this.board);
        this.board.entry[0][6].figure = new Knight(player1, this.board);
        this.board.entry[0][7].figure = new Rook(player1, this.board);
        this.board.entry[1].map((cell: Cell) => {
            cell.figure = new Pawn(player1, this.board);
        });

        this.board.entry[7][0].figure = new Rook(player2, this.board);
        this.board.entry[7][1].figure = new Knight(player2, this.board);
        this.board.entry[7][2].figure = new Bishop(player2, this.board);
        this.board.entry[7][3].figure = new King(player2, this.board);
        this.board.entry[7][4].figure = new Queen(player2, this.board);
        this.board.entry[7][5].figure = new Bishop(player2, this.board);
        this.board.entry[7][6].figure = new Knight(player2, this.board);
        this.board.entry[7][7].figure = new Rook(player2, this.board);
        this.board.entry[6].map((cell: Cell) => {
            cell.figure = new Pawn(player2, this.board);
        });
    }


    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log(this.board);
    }

    canDrop(event) {
        console.log(event);
        console.log(typeof event);
    }

    getAvailibleMoves(event) {
        console.log(`drag start`);
        
        const cell = event.source.dropContainer.data;
        const { figure } = event.source.dropContainer.data;
        figure.setAvailibleMoves(cell);
        console.log(cell);
        console.log(figure);
        console.log(`-------------`);
    }

    drop(event: CdkDragDrop<Cell>) {
        console.log(event);
        console.log(this.board);
        if (event.previousContainer !== event.container && event.container.data.availible) {
            const prevFigure = event.previousContainer.data.figure;
            event.previousContainer.data.figure = event.container.data.figure;
            event.container.data.figure = prevFigure;
        }

        this.board.entry.map(row => {
            row.map((cell: Cell) => {
                cell.availible = false;
            });
        });
    }
}
