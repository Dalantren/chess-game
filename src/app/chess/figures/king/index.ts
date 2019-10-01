import { Figure } from '../../../core/figure';
import { Coords } from '../../../core/cell';
import { Player } from '../../../core/player';
import { Board } from '../../../core/board';

export class King extends Figure {

    constructor(public player: Player, public coords: Coords) {
        super(player, coords);
        this.icon = this.color === `white` ? `&#9812;` : `&#9818;`;
    }

    setAvailibleMoves(board: Board): void {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const x = this.coords.x + j;
                const y = this.coords.y + i;
                if (x < 0 || y < 0 || x >= board.width || y >= board.height) {
                    continue;
                }
                if (board.entry[y][x].figure) {
                    board.entry[y][x].availible = board.entry[y][x].figure.player.id !== this.player.id;
                    continue;
                }
                board.entry[y][x].availible = true;
            }
        }
        if (this.checkCastling(board)) {
            const firstRow = this.color === 'white' ? 7 : 0;
            board.cell({x: 1, y: firstRow}).availible = true;
        }
    }

    checkCastling(board: Board): boolean {
        if (!this.firstMove) {
            return false;
        }
        const bishopX = this.coords.x - 1;
        const knightX = this.coords.x - 2;
        const rookX = this.coords.x - 3;
        if (board.cell({x: bishopX, y: this.coords.y}).figure ||
            board.cell({x: knightX, y: this.coords.y}).figure ||
            !board.cell({x: rookX, y: this.coords.y}).figure) {
            return false;
        }
        const secondRow = this.color === 'white' ? 6 : 1;
        for (let i = 0; i <= 2; i++) {
            if (board.cell({x: i, y: secondRow}).figure.name !== 'Pawn') {
                return false;
            }
        }
        return true;
    }
}
