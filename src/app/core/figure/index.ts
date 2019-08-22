import { Cell } from '../cell';

export class Figure {
  public icon: string;
  public availibleMoves: Array<Cell>;
  public canMove(cell: Cell) {
    return true;
  }
  public getMoves(cell: Cell): Array<Cell> {
      return [];
  }
}
