import { Injectable } from '@angular/core';
import { Player, ChessColors as Colors } from '../../core';
import { ChessBoardService } from './chess-board.service';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor(private board: ChessBoardService) { }

    public players: Array<Player> = [];

    public me: Player;

    public add(id: string, color: Colors) {
        id = id || (this.players.length + 1).toString();
        const player = new Player(id, color);
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

    public isMe(player: Player): boolean {
        return player.id === this.me.id;
    }
}
