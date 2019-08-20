import { Coords } from './coords';

export declare class FigureType {
  public coords: Coords;
  public icon?: SVGElement;
  canMove?(coords: Coords): boolean;
  move?(coords: Coords): void;
}