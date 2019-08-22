import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Knight extends Figure {

    constructor(player: Player) {
        super();
        this.icon = `&#9816;`;
        this.availibleMoves = this.getMoves();
    }

    getMoves() {
        const result = [];
        return result;
    }
}
