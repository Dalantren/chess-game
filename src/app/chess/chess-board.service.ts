import { Injectable } from '@angular/core';
import { Board } from '../core/board';
import { Bishop } from './figures/bishop';
import { Pawn } from './figures/pawn';
import { PlayersService } from './players.service';
import { FiguresService } from './figures.service';
import { Rook } from './figures/rook';
import { Knight } from './figures/knight';
import { Queen } from './figures/queen';
import { King } from './figures/king';
import { Cell } from '../core/cell';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {

    constructor(private playersService: PlayersService, private figuresService: FiguresService) {
        super();
    }

    public startGame(width = 8, height = 8) {
        this.size = { width, height };
        console.log(this.size);

        const player1 = this.playersService.add('black');
        const player2 = this.playersService.add('white');

        this.entry[0][0].figure = new Rook(player1, this, this.entry[0][0]);
        this.entry[0][1].figure = new Knight(player1, this, this.entry[0][1]);
        this.entry[0][2].figure = new Bishop(player1, this, this.entry[0][2]);
        this.entry[0][3].figure = new King(player1, this, this.entry[0][3]);
        this.entry[0][4].figure = new Queen(player1, this, this.entry[0][4]);
        this.entry[0][5].figure = new Bishop(player1, this, this.entry[0][5]);
        this.entry[0][6].figure = new Knight(player1, this, this.entry[0][6]);
        this.entry[0][7].figure = new Rook(player1, this, this.entry[0][7]);
        this.entry[1].map((cell: Cell, index: number) => {
            cell.figure = new Pawn(player1, this, this.entry[1][index]);
        });

        this.entry[7][0].figure = new Rook(player2, this, this.entry[7][0]);
        this.entry[7][1].figure = new Knight(player2, this, this.entry[7][1]);
        this.entry[7][2].figure = new Bishop(player2, this, this.entry[7][2]);
        this.entry[7][3].figure = new King(player2, this, this.entry[7][3]);
        this.entry[7][4].figure = new Queen(player2, this, this.entry[7][4]);
        this.entry[7][5].figure = new Bishop(player2, this, this.entry[7][5]);
        this.entry[7][6].figure = new Knight(player2, this, this.entry[7][6]);
        this.entry[7][7].figure = new Rook(player2, this, this.entry[7][7]);
        this.entry[6].map((cell: Cell, index: number) => {
            cell.figure = new Pawn(player2, this, this.entry[7][index]);
        });

        console.log(this.entry);
    }
}
