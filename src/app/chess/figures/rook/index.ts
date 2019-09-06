import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Rook extends Figure {

    constructor(public player: Player, protected board: ChessBoardService) {
        super(player, board);
        this.icon = this.color === `white` ? `&#9814;` : `&#9820;`;
    }

    setAvailibleMoves(figCell: Cell): void {

        let x = figCell.x + 1;
        let y = figCell.y;
        while (x < this.board.width) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x++;
        }

        x = figCell.x - 1;
        while (x >= 0) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x--;
        }

        x = figCell.x;
        y = figCell.y + 1;
        while (y < this.board.height) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            y++;
        }

        x = figCell.x;
        y = figCell.y - 1;
        while (y >= 0) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            y--;
        }
    }

    checkLine(cell1: Cell, cell2: Cell): void {
        // if (cell1.x === cell2.x) {
        //     const x = cell1.x;
        //     for (let y = Math.min(cell1.y, cell2.y) + 1; y < Math.max(cell1.y, cell2.y); y++) {
        //         console.log(`${x}, ${y}`);
        //         console.log(this.board.entry[x][y].figure);
        //         if (this.board.entry[x][y].figure) {
        //             return false;
        //         }
        //     }
        // } else if (cell1.y === cell2.y) {
        //     const y = cell1.y;
        //     for (let x = Math.min(cell1.x, cell2.x) + 1; x < Math.max(cell1.x, cell2.x); x++) {
        //         if (this.board.entry[x][y].figure) {
        //             return false;
        //         }
        //     }
        // }
        // return false;
    }
}
