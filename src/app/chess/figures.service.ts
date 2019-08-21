import { Injectable } from '@angular/core';
import { Pawn } from './figures/pawn';
import { Bishop } from './figures/bishop';
import { ChessBoardService } from './chess-board.service';
import { Cell } from '../core/cell';
import { Coords } from '../core/coords';

@Injectable({
    providedIn: 'root'
})
export class FiguresService {
    constructor() { }
}
