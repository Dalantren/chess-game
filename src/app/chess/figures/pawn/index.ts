import { Figure } from '../../../core/figure';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';
import { Cell } from 'src/app/core/cell';

export class Pawn extends Figure {

    constructor(player: Player) {
        super();
        this.icon = `&#9817;`;
        this.availibleMoves = this.getMoves();
    }

    getMoves() {
        const result = [];
        // result.push(this.cell.coordinates = {x: this.cell.coords.x, y: this.cell.coords.y + 1});
        return result;
    }
}
