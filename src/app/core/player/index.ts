import { Figure } from '../figure';

export class Player {

    constructor(public id: number = 0, public color: 'black' | 'white') {
    }

    public figures: Array<Figure>;
    public defeatedFigures: Array<Figure> = [];
    public isActive() {
        return true;
    }
    // public action(figure: Figure, to: Coords): void;
}
