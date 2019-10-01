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

    public me: Player;

    public add(id?: string) {
        id = id || (this.players.length + 1).toString();
        const color = this.players.length % 2 ? `black` : `white`;
        const player = new Player(id, color);
        this.setFigures(player);
        this.players.push(player);
        return player;
    }

    public get(index: string): Player {
        return this.players.filter(player => player.id === index)[0];
    }

    public getNextPlayer(currentPlayer: Player): Player {
        let currentIndex = 0;
        this.players.map((player, i) => {
            if (player.id === currentPlayer.id) {
                currentIndex = i;
            }
        });
        return this.players[currentIndex + 1] ? this.players[currentIndex + 1] : this.players[0];
    }

    private setFigures(player: Player) {
        const initialRow = player.color === `white` ? 7 : 0;
        const offset = player.color === `white` ? -1 : 1;
        this.board.entry[initialRow][0].figure = new Rook(player, {x: 0, y: initialRow});
        this.board.entry[initialRow][1].figure = new Knight(player, {x: 1, y: initialRow});
        this.board.entry[initialRow][2].figure = new Bishop(player, {x: 2, y: initialRow});
        this.board.entry[initialRow][3].figure = new King(player, {x: 3, y: initialRow});
        this.board.entry[initialRow][4].figure = new Queen(player, {x: 4, y: initialRow});
        this.board.entry[initialRow][5].figure = new Bishop(player, {x: 5, y: initialRow});
        this.board.entry[initialRow][6].figure = new Knight(player, {x: 6, y: initialRow});
        this.board.entry[initialRow][7].figure = new Rook(player, {x: 7, y: initialRow});
        this.board.entry[initialRow + offset].map((cell: Cell, index: number) => {
            cell.figure = new Pawn(player, {x: index, y: initialRow + offset});
        });
    }
}
