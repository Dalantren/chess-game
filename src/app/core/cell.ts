import { Coords } from './coords';
import { Figure } from './figure';
import { CellType } from './cell.d';

export class Cell implements CellType {
    public coords: Coords;
    public figure: Figure;

    constructor(coords: Coords, figure: Figure) {
        this.coords = coords;
        this.figure = figure;
    }
}
