import { Coords, Cell } from '../cell';
import { Player } from '../player';

export interface BoardSize { width: number; height?: number; }

export class Board {

    public width = 8;
    public height = 8;

    private board = [];

    public players: Array<Player> = [];

    public get size(): BoardSize {
        return {
            width: this.width,
            height: this.height
        };
    }

    public set size(size: BoardSize) {
        if (typeof size.height === 'undefined') {
            size.height = size.width;
        }
        this.width = size.width;
        this.height = size.height;

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

    public cell(coords: Coords): Cell {
        return this.entry[coords.y][coords.x] || null;
    }
}
