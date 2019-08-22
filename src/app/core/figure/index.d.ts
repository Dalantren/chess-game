import { Cell } from '../cell';

export declare class FigureType {
  public icon?: string;
  public availibleMoves: Array<Cell>;
  canMove?(coords: Cell): boolean;
  getMoves?(coords: Cell): Array<Cell>;
}