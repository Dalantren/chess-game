import { Injectable } from '@angular/core';
import { Player } from '../core/player';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    public players: Array<Player> = [];

    public add() {
        this.players.push(new Player(this.players.length + 1));
    }
}
