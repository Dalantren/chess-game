import { Figure, Coords, Player, Board, ChessColors as Colors, ChessFiguresIcons as Icons } from '../../../core';

export class Knight extends Figure {

    constructor(public color: Colors, public coords: Coords) {
        super(color, coords);
        this.icon = this.color === Colors.WHITE ? Icons.KNIGHT_W : Icons.KNIGHT_B;
    }

    setAvailibleMoves(board: Board): void {
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if ((Math.abs(j) === 2 && Math.abs(i) === 1) || (Math.abs(i) === 2 && Math.abs(j) === 1)) {
                    if (board.entry[y][x].figure) {
                        board.entry[y][x].availible = board.entry[y][x].figure.color !== this.color;
                        continue;
                    }
                    board.entry[y][x].availible = true;
                }
            }
        }
    }
}
