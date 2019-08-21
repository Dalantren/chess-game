import { Coords } from '../coords';

export declare class FigureType {
  public coords: Coords;
  public icon?: SVGElement;
  canMove?(coords: Coords): boolean;
  availibleMoves?(coords: Coords): Array<Coords>;
}