import { Injectable } from '@angular/core';
import { Player } from '../core/player';

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

    public getNextPlayer(player: Player): Player {
        return this.get(player.id + 1 > this.players.length ? 1 : (player.id + 1));
    }
}
