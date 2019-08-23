import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Bishop extends Figure {

    constructor(public player: Player, public board: ChessBoardService, public cell: Cell) {
        super(player, board, cell);
        this.icon = this.color === `white` ? `&#9815;` : `&#9821;`;
    }

    getMoves() {
        const result = [];
        for (let i = 1; i < Math.max(this.board.size.width, this.board.size.height); i++) {
            if ((this.cell.x + i) <= this.board.width && (this.cell.y + i) <= this.board.height) {
                result.push(new Cell(this.cell.x + i, this.cell.y + i));
            }
            if ((this.cell.x + i) <= this.board.width && (this.cell.y - i) >= 0) {
                result.push(new Cell(this.cell.x + i, this.cell.y - i));
            }
            if ((this.cell.x - i) >= 0 && (this.cell.y + i) <= this.board.height) {
                result.push(new Cell(this.cell.x - i, this.cell.y + i));
            }
            if ((this.cell.x - i) >= 0 && (this.cell.y - i) >= 0) {
                result.push(new Cell(this.cell.x - i, this.cell.y - i));
            }
        }
        return result;
    }
}
