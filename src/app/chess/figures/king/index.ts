import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class King extends Figure {

    constructor(public player: Player, protected board: ChessBoardService) {
        super(player, board);
        this.icon = this.color === `white` ? `&#9812;` : `	&#9818;`;
    }

    setAvailibleMoves(figCell: Cell): void {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = figCell.x + j;
                const y = figCell.y + i;
                if (x < 0 || y < 0 || x >= this.board.width || y >= this.board.height) {
                    continue;
                }
                if (this.board.entry[y][x].figure) {
                    this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                    continue;
                }
                this.board.entry[y][x].availible = true;
            }
        }
    }
}