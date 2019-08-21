import { Injectable } from '@angular/core';
import { Player } from '../core/player';
import { Pawn } from './figures/pawn';
import { Bishop } from './figures/bishop';
import { ChessBoardService } from './chess-board.service';
import { Coords } from '../core/coords';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor() { }

    public players: Array<Player> = [];

    public add() {
        this.players.push(new Player(this.players.length + 1));
    }
}
