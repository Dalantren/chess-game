import { Figure } from '../figure';
import { ChessColors } from '../enums';

export class Player {

    constructor(public id: string, public color: ChessColors) { }

    private myTurn = false;

    public figures: Array<Figure> = [];
    public felledFigures: Array<Figure> = [];

    public startMove(): void {
        this.myTurn = true;
    }

    public canMove(): boolean {
        return this.myTurn;
    }

    public endMove(): void {
        this.myTurn = false;
    }

    public toggleMove(): void {
        this.myTurn = !this.myTurn;
    }
}
