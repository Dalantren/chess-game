import { Figure } from '../../../core/figure';
import { Coords } from '../../../core/coords';
import { ChessBoardService } from '../../chess-board';

export class Bishop extends Figure {

    constructor(private board: ChessBoardService, coords: Coords, player: number) {
        super();
        this.coords = coords;
        this.icon = `&#9815;`;
        this.player = player;
        this.availibleMoves = this.getMoves();
    }

    getMoves(coords: Coords = this.coords) {
        const result = [];
        for (let i = 1; i < Math.max(this.board.size.width, this.board.size.height); i++) {
            if ((coords.x + i) <= this.board.width && (coords.y + i) <= this.board.height) {
                result.push(new Coords(coords.x + i, coords.y + i));
            }
            if ((coords.x + i) <= this.board.width && (coords.y - i) >= 0) {
                result.push(new Coords(coords.x + i, coords.y - i));
            }
            if ((coords.x - i) >= 0 && (coords.y + i) <= this.board.height) {
                result.push(new Coords(coords.x - i, coords.y + i));
            }
            if ((coords.x - i) >= 0 && (coords.y - i) >= 0) {
                result.push(new Coords(coords.x - i, coords.y - i));
            }
        }
        return result;
    }
}