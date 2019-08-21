import { Injectable } from '@angular/core';
import { Board } from '../core/board';
import { Bishop } from './figures/bishop';
import { Pawn } from './figures/pawn';
import { PlayersService } from './players.service';
import { FiguresService } from './figures.service';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {

    constructor(private playersService: PlayersService, private figuresService: FiguresService) {
        super();
    }

    public startGame(width = 8, height = 8) {
        this.entry = { width, height };
        if (!this.entry.height) {
            return;
        }
        const player1 = this.playersService.add();
        const player2 = this.playersService.add();
        // this.playersService.initFigures();
    }
}
