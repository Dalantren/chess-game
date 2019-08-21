import { Coords } from '../coords';
import { Figure } from '../figure';

export class Cell {
    constructor(public coords: Coords, public figure: Figure) {
    }

    get coordinates() {
        return [ this.coords.x, this.coords.y ];
    }

    isBlack(): boolean {
        return (this.coords.x + this.coords.y) % 2 === 0;
    }
}
