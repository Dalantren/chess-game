import { Coords } from './coords';
import { FigureType } from './figure.d';

export class Figure implements FigureType {
  public coords: Coords;
  public icon: SVGElement;
  public canMove(coords: Coords) {
    return true;
  }
  public move(coords: Coords) {}
}
