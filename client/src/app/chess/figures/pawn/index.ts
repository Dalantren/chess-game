import { Figure, Coords, Player, Board, ChessColors as Colors, ChessFiguresIcons as Icons } from '../../../core';
export class Pawn extends Figure {

    constructor(public color: Colors, public coords: Coords) {
        super(color, coords);
        this.icon = this.color === Colors.WHITE ? Icons.PAWN_W : Icons.PAWN_B ;
    }

    setAvailibleMoves(board: Board): void {
        const offset = this.firstMove ? 2 : 1;
        const direction = this.color === Colors.WHITE ? -1 : 1;
        for (let i = 1; i <= offset; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i * direction;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if (board.entry[y][x].figure && Math.abs(j) === 1 && Math.abs(i) === 1) {
                    board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                    continue;
                }
                if (j === 0 && !board.entry[y][x].figure) {
                    board.entry[y][x].availible = true;
                }
            }
        }
    }
}
