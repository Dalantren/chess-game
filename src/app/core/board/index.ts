import { Cell } from '../cell';
import { Player } from '../player';

export class Board {

    public width = 8;
    public height = 8;

    private board = [];

    public players: Array<Player> = [];

    public get size() {
        return {
            width: this.width,
            height: this.height
        };
    }

    public set size(value: {width: number, height?: number}) {
        if (typeof value.height === 'undefined') {
            value.height = value.width;
        }
        this.width = value.width;
        this.height = value.height;

        for (let row = 0; row < this.height; row++) {
            this.board[row] = new Array();
            for (let col = 0; col < this.width; col++) {
                this.board[row].push(new Cell(col, row));
            }
        }
    }

    public get entry() {
        return this.board;
    }

    public cell(coords: {x: number, y: number}): Cell {
        return this.entry[coords.y][coords.x] || null;
    }

    public changeFigures(from: Cell, to: Cell): void {
        if (to.figure && from.figure.player.id !== to.figure.player.id) {
            to.figure.player.felledFigures.push(to.figure);
            to.figure.player.figures = to.figure.player.figures.filter(figure => to.figure.id !== figure.id);
        }
        from.figure.firstMove = false;
        to.figure = from.figure;
        from.figure = null;
    }
}
