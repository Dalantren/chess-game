import { Figure } from '../../../core/figure';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';
import { Cell } from 'src/app/core/cell';

export class Pawn extends Figure {

    constructor(private board: ChessBoardService, cell: Cell) {
        super();
        this.cell = cell;
        this.icon = `&#9817;`;
        this.availibleMoves = this.getMoves();
    }

    getMoves(cell: Cell = this.cell) {
        const result = [];
        // result.push(this.cell.coordinates = {x: this.cell.coords.x, y: this.cell.coords.y + 1});
        return result;
    }
}
