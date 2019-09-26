import { Player } from '../player';
import { Board } from '../board';
import { ChessBoardService } from 'src/app/chess/chess-board.service';
import { Cell } from '../cell';

export class Figure {

    public id: number;
    public icon: string;
    public color: 'black' | 'white';
    public firstMove = true;
    public name = this.constructor.name;

    constructor(public player: Player) {
        this.color = this.player.color;
        this.id = player.figures.length;
        player.figures.push(this);
    }

    public setAvailibleMoves(cell: Cell, board: Board): void {}
}
