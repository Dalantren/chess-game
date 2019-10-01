import { Figure } from '../../../core/figure';
import { Player } from '../../../core/player';
import { Coords } from '../../../core/cell';
import { Board } from '../../../core/board';

export class Pawn extends Figure {

    constructor(public player: Player, public coords: Coords) {
        super(player, coords);
        this.icon = this.color === `white` ? `&#9817;` : `&#9823;`;
    }

    setAvailibleMoves(board: Board): void {
        const offset = this.firstMove ? 2 : 1;
        const direction = this.color === 'white' ? -1 : 1;
        console.log(board);
        for (let i = 1; i <= offset; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i * direction;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if (board.entry[y][x].figure && Math.abs(j) === 1 && Math.abs(i) === 1) {
                    board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                    continue;
                }
                if (j === 0 && !board.entry[y][x].figure) {
                    board.entry[y][x].availible = true;
                }
            }
        }
    }
}
