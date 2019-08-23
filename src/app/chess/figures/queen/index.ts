import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Queen extends Figure {

    constructor(public player: Player, public board: ChessBoardService, public cell: Cell) {
        super(player, board, cell);
        this.icon = this.color === `white` ? `&#9813;` : `&#9819;`;
    }

    getMoves() {
        const result = [];
        return result;
    }
}
