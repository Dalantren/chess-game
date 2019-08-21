import { Coords } from '../coords';

export declare class FigureType {
  public coords: Coords;
  public icon?: string;
  public availibleMoves: Array<Coords>;
  canMove?(coords: Coords): boolean;
  getMoves?(coords: Coords): Array<Coords>;
}