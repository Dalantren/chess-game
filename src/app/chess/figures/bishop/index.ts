import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Bishop extends Figure {

    constructor(private board: ChessBoardService, cell: Cell, player: Player) {
        super();
        this.cell = cell;
        this.icon = `&#9815;`;
        this.availibleMoves = this.getMoves();
    }

    getMoves(cell: Cell = this.cell) {
        const result = [];
        // for (let i = 1; i < Math.max(this.board.size.width, this.board.size.height); i++) {
        //     if ((cell.coords.x + i) <= this.board.width && (cell.coords.y + i) <= this.board.height) {
        //         result.push(new Cell(cell.coords.x + i, cell.coords.y + i));
        //     }
        //     if ((cell.coords.x + i) <= this.board.width && (cell.coords.y - i) >= 0) {
        //         result.push(new Coords(cell.coords.x + i, cell.coords.y - i));
        //     }
        //     if ((cell.coords.x - i) >= 0 && (cell.coords.y + i) <= this.board.height) {
        //         result.push(new Coords(cell.coords.x - i, cell.coords.y + i));
        //     }
        //     if ((cell.coords.x - i) >= 0 && (cell.coords.y - i) >= 0) {
        //         result.push(new Coords(cell.coords.x - i, cell.coords.y - i));
        //     }
        // }
        return result;
    }
}