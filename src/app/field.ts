import { Coords } from './core/coords';
import { Cell } from './core/cell';
import { Figure } from './core/figure';

export class Field {

  public width: number;
  public height: number;

  public entry: Array<Cell[]> = [];

  constructor(x: number, y: number) {
    this.width = x;
    this.height = y;

    console.log(this.entry);
    for (let row = 0; row < x; row++) {
      this.entry.push([]);
      for (let col = 1; col <= y; col++) {
        this.entry[row].push(new Cell( new Coords(row, col), new Figure()));
      }
    }
    console.log(this.entry);
    console.log(this.entry[0][0].coords);
    console.log(this.entry[0][1].coords.x);
  }

  public get size() {
    return {
      width: this.width,
      height: this.height
    };
  }
}
