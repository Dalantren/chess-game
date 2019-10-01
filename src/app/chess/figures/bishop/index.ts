import { Figure } from '../../../core/figure';
import { Coords } from '../../../core/cell';
import { Player } from '../../../core/player';
import { Board } from '../../../core/board';

export class Bishop extends Figure {

    constructor(public player: Player, public coords: Coords) {
        super(player, coords);
        this.icon = this.color === `white` ? `&#9815;` : `&#9821;`;
    }

    setAvailibleMoves(board: Board): void {
        let x = this.coords.x + 1;
        let y = this.coords.y + 1;
        while (x < board.width && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y++;
        }

        x = this.coords.x - 1;
        y = this.coords.y + 1;
        while (x >= 0 && y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y++;
        }

        x = this.coords.x + 1;
        y = this.coords.y - 1;
        while (x < board.width && y >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++; y--;
        }

        x = this.coords.x - 1;
        y = this.coords.y - 1;
        while (y >= 0 && x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--; y--;
        }
    }
}
