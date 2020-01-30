import { Figure, Coords, Player, Board, ChessColors as Colors, ChessFiguresIcons as Icons } from '../../../core';

export class Queen extends Figure {

    constructor(public color: Colors, public coords: Coords) {
        super(color, coords);
        this.icon = this.color === Colors.WHITE ? Icons.QUEEN_W : Icons.QUEEN_B;
    }

    setAvailibleMoves(board: Board): void {
        let x = this.coords.x + 1;
        let y = this.coords.y + 1;
        while (x < board.width && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y++;
        }

        x = this.coords.x - 1;
        y = this.coords.y + 1;
        while (x >= 0 && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y++;
        }

        x = this.coords.x + 1;
        y = this.coords.y - 1;
        while (x < board.width && y >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y--;
        }

        x = this.coords.x - 1;
        y = this.coords.y - 1;
        while (y >= 0 && x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y--;
        }

        x = this.coords.x + 1;
        y = this.coords.y;
        while (x < board.width) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x++;
        }

        x = this.coords.x - 1;
        while (x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            x--;
        }

        x = this.coords.x;
        y = this.coords.y + 1;
        while (y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            y++;
        }

        x = this.coords.x;
        y = this.coords.y - 1;
        while (y >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                break;
            }
            board.entry[y][x].availible = true;
            y--;
        }
    }
}
