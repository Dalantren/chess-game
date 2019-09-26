import { Figure } from '../figure';

export class Player {

    constructor(public id: number = 0, public color: 'black' | 'white') {
    }

    private active = false;

    public figures: Array<Figure> = [];
    public felledFigures: Array<Figure> = [];
    public startMove(): void {
        this.active = true;
    }
    public canMove(): boolean {
        return this.active;
    }
    public endMove(): void {
        this.active = false;
    }
}
