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
}
