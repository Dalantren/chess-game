import { Board } from '../board';
import { Coords } from '../cell';
import { ChessColors } from '../enums';
import { ReplaySubject } from 'rxjs';

export abstract class FiguresCreator {
    public abstract create(name?: string, color?: ChessColors, coords?: Coords): Figure;
}

export interface Figure {
    id: number;
    icon: string;
    color: ChessColors;
    firstMove: boolean;
    name: string;
    coords: Coords;

    setAvailibleMoves(board: Board): void;

    chop(): void;

    startMove(): void;
    endMove(): void;
}

export class Figure implements Figure {
    public icon: string;
    public firstMove = true;
    public name = this.constructor.name.toLowerCase();
    public choped$ = new ReplaySubject(1);

    constructor(public color: ChessColors, public coords: Coords) { }

    public setAvailibleMoves(board: Board): void {}

    public chop(): void { }

    public endMove() { console.log(this) }
}
