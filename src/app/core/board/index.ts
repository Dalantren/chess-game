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

        for (let row = 0; row < this.width; row++) {
            this.board[row] = new Array();
            for (let col = 0; col < this.height; col++) {
                this.board[row].push(new Cell(row, col));
            }
        }
    }

    public get entry() {
        return this.board;
    }
}
