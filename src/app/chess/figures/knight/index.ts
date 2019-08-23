import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Knight extends Figure {

    constructor(public player: Player, public board: ChessBoardService, public cell: Cell) {
        super(player, board, cell);
        this.icon = this.color === `white` ? `&#9816;` : `&#9822;`;
    }

    getMoves() {
        const result = [];
        return result;
    }
}
