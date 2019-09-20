import { Injectable } from '@angular/core';
import { Board } from '../core/board';
import { PlayersService } from './players.service';
import { FiguresService } from './figures.service';
import { Cell } from '../core/cell';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {

    constructor(private playersService: PlayersService, private figuresService: FiguresService) {
        super();
    }

    public initBoard(width = 8, height = 8) {
        this.size = { width, height };
    }

    public clearAvailibles(): void {
        this.entry.map(row => {
            row.map((cell: Cell) => {
                cell.availible = false;
            });
        });
    }
}
