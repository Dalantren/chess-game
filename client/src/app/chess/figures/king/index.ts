import { Figure, Coords, Player, Board, Cell, ChessColors as Colors, ChessFiguresIcons as Icons } from '../../../core';

export class King extends Figure {

    constructor(public color: Colors, public coords: Coords) {
        super(color, coords);
        this.icon = this.color === Colors.WHITE ? Icons.KING_W : Icons.KING_B;
    }

    setAvailibleMoves(board: Board): void {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                const cell: Cell = board.getCell({x, y});
                if (cell.figure) {
                    cell.availible = cell.figure.color !== this.color;
                    continue;
                }
                cell.availible = true;
            }
        }
        if (this.checkCastling(board)) {
            const firstRow = this.color === Colors.WHITE ? 7 : 0;
            board.getCell({x: 1, y: firstRow}).availible = true;
        }
    }

    checkCastling(board: Board): boolean {
        if (!this.firstMove) {
            return false;
        }
        const bishop = board.getCell({ x: this.coords.x - 1, y: this.coords.y }).figure;
        const knight = board.getCell({ x: this.coords.x - 2, y: this.coords.y }).figure;
        const rook = board.getCell({ x: this.coords.x - 3, y: this.coords.y }).figure;
        const secondRow = this.color === Colors.WHITE ? board.height - 2 : 1;

        if (!(bishop.name === 'bishop' && bishop.firstMove) ||
            !(knight.name === 'knight' && knight.firstMove) ||
            !(rook.name === 'rook' && rook.firstMove)
            ) {
            return false;
        }
        for (let i = 0; i <= 2; i++) {
            const pawn = board.getCell({ x: i, y: secondRow}).figure;
            if (!(pawn.name !== 'Pawn' || pawn.firstMove)) {
                return false;
            }
        }
        return true;
    }

    endMove() {

    }
}
