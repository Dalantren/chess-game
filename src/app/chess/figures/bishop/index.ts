import { Figure } from '../../../core/figure';
import { Cell } from '../../../core/cell';
import { ChessBoardService } from '../../chess-board.service';
import { Player } from 'src/app/core/player';

export class Bishop extends Figure {

    constructor(public player: Player, protected board: ChessBoardService) {
        super(player, board);
        this.icon = this.color === `white` ? `&#9815;` : `&#9821;`;
    }

    setAvailibleMoves(figCell: Cell): void {
        let x = figCell.x + 1;
        let y = figCell.y + 1;
        while (x < this.board.width && y < this.board.height) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x++; y++;
        }

        x = figCell.x - 1;
        y = figCell.y + 1;
        while (x >= 0 && y < this.board.height) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x--; y++;
        }

        x = figCell.x + 1;
        y = figCell.y - 1;
        while (x < this.board.width && y >= 0) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x++; y--;
        }

        x = figCell.x - 1;
        y = figCell.y - 1;
        while (y >= 0 && x >= 0) {
            if (this.board.entry[y][x].figure) {
                this.board.entry[y][x].availible = this.board.entry[y][x].figure.player.id !== this.player.id;
                break;
            }
            this.board.entry[y][x].availible = true;
            x--; y--;
        }
    }
}
