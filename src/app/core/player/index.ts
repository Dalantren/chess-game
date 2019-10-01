import { Figure } from '../figure';
import { Cell } from '../cell';

export class Player {

    constructor(public id: string, public color: 'black' | 'white') { }

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
}
