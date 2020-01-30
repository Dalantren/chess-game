import { Coords, Cell } from '../cell';
import { Player } from '../player';
import { ChessColors } from '../enums';
import { FiguresCreator } from '../figure';

export interface BoardSize { width: number; height?: number; }

export class Board {
    private board: Array<Cell[]> = [];
    protected figuresCreator: FiguresCreator;

    public width = 8;
    public height = 8;
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

    public getCell(coords: Coords): Cell {
        return this.entry[coords.y][coords.x] || null;
    }

    public initBoard(width = 8, height = 8) {
        this.size = { width, height };
        this.setFigures();
    }

    public clearAvailibles(): void {
        this.entry.forEach(row => row.forEach((cell: Cell) => cell.availible = false));
    }

    private setFigures() {
        Object.values(ChessColors).forEach((color: ChessColors) => {
            const initialRow = color === ChessColors.WHITE ? this.height - 1 : 0;
            const offset = color === ChessColors.WHITE ? -1 : 1;
            this.board[initialRow][0].figure = this.figuresCreator.create('rook', color, { x: 0, y: initialRow });
            this.board[initialRow][1].figure = this.figuresCreator.create('knight', color, { x: 1, y: initialRow });
            this.board[initialRow][2].figure = this.figuresCreator.create('bishop', color, { x: 2, y: initialRow });
            this.board[initialRow][3].figure = this.figuresCreator.create('king', color, { x: 3, y: initialRow });
            this.board[initialRow][4].figure = this.figuresCreator.create('queen', color, { x: 4, y: initialRow });
            this.board[initialRow][5].figure = this.figuresCreator.create('bishop', color, { x: 5, y: initialRow });
            this.board[initialRow][6].figure = this.figuresCreator.create('knight', color, { x: 6, y: initialRow });
            this.board[initialRow][7].figure = this.figuresCreator.create('rook', color, { x: 7, y: initialRow });
            this.board[initialRow + offset].map((cell: Cell, index: number) => {
                cell.figure = this.figuresCreator.create('pawn', color, { x: index, y: initialRow + offset });
            });
        });
    }
}
