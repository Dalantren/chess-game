import { Coords } from '../coords';

export class Cell {
    constructor(private coords: Coords) { }

    get coordinates() {
        return { x: this.coords.x, y: this.coords.y };
    }

    set coordinates({x, y}) {
        this.coords = new Coords(x, y);
    }

    isBlack(): boolean {
        return (this.coords.x + this.coords.y) % 2 === 0;
    }
}
