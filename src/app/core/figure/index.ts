import { Player } from '../player';
import { Board } from '../board';
import { Cell, Coords } from '../cell';

export class Figure {

    public id: number;
    public icon: string;
    public color: 'black' | 'white';
    public firstMove = true;
    public name = this.constructor.name;
    public coords: Coords;

    constructor(public player: Player, coords: Coords) {
        this.coords = coords;
        this.color = this.player.color;
        this.id = player.figures.length;
        player.figures.push(this);
    }

    public setAvailibleMoves(board: Board): void {}
}
