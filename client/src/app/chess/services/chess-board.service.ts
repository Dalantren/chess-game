import { Injectable } from '@angular/core';
import { Board, Cell, ChessColors, FiguresCreator } from '../../core';
import { ChessFiguresCreator } from '../figures/creator';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {
    protected figuresCreator: FiguresCreator = new ChessFiguresCreator();

    public makeMove(from: Cell, to: Cell): void {
        if (to.figure && from.figure && from.figure.color !== to.figure.color) {
            to.figure.choped$.next(true);
        }
        from.figure.firstMove = false;
        to.figure = from.figure;
        from.figure = null;
    }
}
