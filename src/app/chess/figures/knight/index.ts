import { Figure } from '../../../core/figure';
import { Coords } from '../../../core/cell';
import { Player } from '../../../core/player';
import { Board } from '../../../core/board';

export class Knight extends Figure {

    constructor(public player: Player, public coords: Coords) {
        super(player, coords);
        this.icon = this.color === `white` ? `&#9816;` : `&#9822;`;
    }

    setAvailibleMoves(board: Board): void {
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if ((Math.abs(j) === 2 && Math.abs(i) === 1) || (Math.abs(i) === 2 && Math.abs(j) === 1)) {
                    if (board.entry[y][x].figure) {
                        board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                        continue;
                    }
                    board.entry[y][x].availible = true;
                }
            }
        }
    }
}
