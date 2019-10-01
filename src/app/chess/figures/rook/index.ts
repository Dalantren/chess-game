import { Figure } from '../../../core/figure';
import { Coords } from '../../../core/cell';
import { Board } from '../../../core/board';
import { Player } from 'src/app/core/player';

export class Rook extends Figure {

    constructor(public player: Player, public coords: Coords) {
        super(player, coords);
        this.icon = this.color === `white` ? `&#9814;` : `&#9820;`;
    }

    setAvailibleMoves(board: Board): void {

        let x = this.coords.x + 1;
        let y = this.coords.y;
        while (x < board.width) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x++;
        }

        x = this.coords.x - 1;
        while (x >= 0) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            x--;
        }

        x = this.coords.x;
        y = this.coords.y + 1;
        while (y < board.height) {
            if (board.entry[y][x].figure) {
                board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            board.entry[y][x].availible = true;
            y++;
        }

        x = this.coords.x;
        y = this.coords.y - 1;
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
