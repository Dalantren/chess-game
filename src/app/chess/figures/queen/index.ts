import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { Board } from '../../../core/board';
import { Player } from 'src/app/core/player';

export class Queen extends Figure {

    constructor(public player: Player) {
        super(player);
        this.icon = this.color === `white` ? `&#9813;` : `&#9819;`;
    }

    setAvailibleMoves(cell: Cell, board: Board): void {
        let x = cell.x + 1;
        let y = cell.y + 1;
        while (x < board.width && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y++;
        }

        x = cell.x - 1;
        y = cell.y + 1;
        while (x >= 0 && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y++;
        }

        x = cell.x + 1;
        y = cell.y - 1;
        while (x < board.width && y >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y--;
        }

        x = cell.x - 1;
        y = cell.y - 1;
        while (y >= 0 && x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y--;
        }

        x = cell.x + 1;
        y = cell.y;
        while (x < board.width) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++;
        }

        x = cell.x - 1;
        while (x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--;
        }

        x = cell.x;
        y = cell.y + 1;
        while (y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            y++;
        }

        x = cell.x;
        y = cell.y - 1;
        while (y >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            y--;
        }
    }
}
