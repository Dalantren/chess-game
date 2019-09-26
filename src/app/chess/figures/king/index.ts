import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { Player } from '../../../core/player';
import { Board } from '../../../core/board';

export class King extends Figure {

    constructor(public player: Player) {
        super(player);
        this.icon = this.color === `white` ? `&#9812;` : `&#9818;`;
    }

    setAvailibleMoves(cell: Cell, board: Board): void {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = cell.x + j;
                const y = cell.y + i;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if (board.entry[y][x].figure) {
                    board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                    continue;
                }
                board.entry[y][x].availible = true;
            }
        }
    }
}
