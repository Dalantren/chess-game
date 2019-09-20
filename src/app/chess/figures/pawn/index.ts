import { Figure } from '../../../core/figure';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';
import { Cell } from 'src/app/core/cell';

export class Pawn extends Figure {

    constructor(public player: Player, protected board: ChessBoardService) {
        super(player, board);
        this.icon = this.color === `white` ? `&#9817;` : `&#9823;`;
    }

    setAvailibleMoves(figCell: Cell): void {
        const offset = this.firstMove ? 2 : 1;
        const direction = this.color === 'white' ? -1 : 1;
        for (let i = 1; i <= offset; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = figCell.x + j;
                const y = figCell.y + i * direction;
                if (x < 0 || y < 0 || x >= this.board.width || y >= this.board.height) {
                    continue;
                }
                if (this.board.entry[y][x].figure && Math.abs(j) === 1 && Math.abs(i) === 1) {
                    this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                    continue;
                }
                if (j === 0 && !this.board.entry[y][x].figure) {
                    this.board.entry[y][x].availible = true;
                }
            }
        }
    }
}
