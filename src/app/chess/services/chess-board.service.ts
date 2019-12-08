import { Injectable } from '@angular/core';
import { Board, Cell, ChessColors, FiguresCreator } from '../../core';
import { ChessFiguresCreator } from '../figures/creator';

@Injectable({
    providedIn: 'root'
})
export class ChessBoardService extends Board {
    figuresCreator: FiguresCreator = new ChessFiguresCreator();

    public initBoard(width = 8, height = 8) {
        this.size = { width, height };
        this.setFigures();
    }

    public clearAvailibles(): void {
        this.entry.forEach(row => row.forEach((cell: Cell) => cell.availible = false));
    }

    private setFigures() {
        Object.values(ChessColors).forEach((color: ChessColors) => {
            const initialRow = color === ChessColors.WHITE ? this.width - 1 : 0;
            const offset = color === ChessColors.WHITE ? -1 : 1;
            this.entry[initialRow][0].figure = this.figuresCreator.create('rook', color, { x: 0, y: initialRow });
            this.entry[initialRow][1].figure = this.figuresCreator.create('knight', color, { x: 1, y: initialRow });
            this.entry[initialRow][2].figure = this.figuresCreator.create('bishop', color, { x: 2, y: initialRow });
            this.entry[initialRow][3].figure = this.figuresCreator.create('king', color, { x: 3, y: initialRow });
            this.entry[initialRow][4].figure = this.figuresCreator.create('queen', color, { x: 4, y: initialRow });
            this.entry[initialRow][5].figure = this.figuresCreator.create('bishop', color, { x: 5, y: initialRow });
            this.entry[initialRow][6].figure = this.figuresCreator.create('knight', color, { x: 6, y: initialRow });
            this.entry[initialRow][7].figure = this.figuresCreator.create('rook', color, { x: 7, y: initialRow });
            this.entry[initialRow + offset].map((cell: Cell, index: number) => {
                cell.figure = this.figuresCreator.create('pawn', color, { x: index, y: initialRow + offset });
            });
        });
    }

    public makeMove(from: Cell, to: Cell): void {
        if (to.figure && from.figure.color !== to.figure.color) {
            to.figure.choped$.next();
        }
        from.figure.firstMove = false;
        to.figure = from.figure;
        to.figure.coords = to.coords;
        from.figure = null;
    }
}
