import { Figure } from '../../../core/figure';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';
import { Cell } from 'src/app/core/cell';

export class Pawn extends Figure {

    constructor(public player: Player, public board: ChessBoardService, public cell: Cell) {
        super(player, board, cell);
        this.icon = this.color === `white` ? `&#9817;` : `&#9823;`;
    }

    getMoves() {
        const result = [];
        // result.push(this.cell.coordinates = {x: this.cell.coords.x, y: this.cell.coords.y + 1});
        return result;
    }
}
