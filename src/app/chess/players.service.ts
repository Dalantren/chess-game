import { Injectable } from '@angular/core';
import { Player } from './../core/player';
import { Cell } from './../core/cell';
import { King, Queen, Bishop, Pawn, Knight, Rook } from './figures/figures';
import { ChessBoardService } from './chess-board.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private board: ChessBoardService) { }

    public players: Array<Player> = [];

    public add(id?: number) {
        id = id || this.players.length + 1;
        const color = this.players.length % 2 ? `white` : `black`;
        const player = new Player(id, color);
        this.setFigures(player);
        this.players.push(player);
        console.log(this.players);
        return player;
    }

    public get(index: number): Player {
        return this.players.filter(player => player.id === index)[0];
    }

    public getNextPlayer(player: Player): Player {
        return this.get(player.id + 1 > this.players.length ? 1 : (player.id + 1));
    }

    private setFigures(player: Player) {
        const initialRow = player.color === `white` ? 7 : 0;
        const secondRow = player.color === `white` ? -1 : 1;
        this.board.entry[initialRow][0].figure = new Rook(player);
        this.board.entry[initialRow][1].figure = new Knight(player);
        this.board.entry[initialRow][2].figure = new Bishop(player);
        this.board.entry[initialRow][3].figure = new King(player);
        this.board.entry[initialRow][4].figure = new Queen(player);
        this.board.entry[initialRow][5].figure = new Bishop(player);
        this.board.entry[initialRow][6].figure = new Knight(player);
        this.board.entry[initialRow][7].figure = new Rook(player);
        this.board.entry[initialRow + secondRow].map((cell: Cell) => {
            cell.figure = new Pawn(player);
        });
    }
}
