import { Figure, Coords, Player, Board, Cell, ChessColors as Colors, ChessFiguresIcons as Icons } from '../../../core';

export class Bishop extends Figure {

    constructor(public color: Colors, public coords: Coords) {
        super(color, coords);
        this.icon = this.color === Colors.WHITE ? Icons.BISHOP_W : Icons.BISHOP_B;
    }

    setAvailibleMoves(board: Board): void {
        let x = this.coords.x + 1;
        let y = this.coords.y + 1;
        while (x < board.width && y < board.height) {
            const cell: Cell = board.getCell({x, y});
            if (cell.figure) {
                cell.availible = cell.figure.color !== this.color;
                break;
            }
            cell.availible = true;
            x++; y++;
        }

        x = this.coords.x - 1;
        y = this.coords.y + 1;
        while (x >= 0 && y < board.height) {
            const cell: Cell = board.getCell({x, y});
            if (cell.figure) {
                cell.availible = cell.figure.color !== this.color;
                break;
            }
            cell.availible = true;
            x--; y++;
        }

        x = this.coords.x + 1;
        y = this.coords.y - 1;
        while (x < board.width && y >= 0) {
            const cell: Cell = board.getCell({x, y});
            if (cell.figure) {
                cell.availible = cell.figure.color !== this.color;
                break;
            }
            cell.availible = true;
            x++; y--;
        }

        x = this.coords.x - 1;
        y = this.coords.y - 1;
        while (y >= 0 && x >= 0) {
            const cell: Cell = board.getCell({x, y});
            if (cell.figure) {
                cell.availible = cell.figure.color !== this.color;
                break;
            }
            cell.availible = true;
            x--; y--;
        }
    }

    setCellAvailiability(cell: Cell) {
        cell.availible = cell.figure ? cell.figure.color !== this.color : true;
    }
}
