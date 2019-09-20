import { Injectable } from '@angular/core';
import { Player } from '../core/player';
import { Pawn } from './figures/pawn';
import { Bishop } from './figures/bishop';
import { ChessBoardService } from './chess-board.service';
import { Cell } from '../core/cell';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor() { }

    public players: Array<Player> = [];

    public add(color: 'black' | 'white') {
        const player = new Player(this.players.length + 1, color);
        this.players.push(player);
        return player;
    }

    public get(index: number): Player {
        return this.players.filter(player => player.id === index)[0];
    }
}
