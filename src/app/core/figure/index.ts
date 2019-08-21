import { Coords } from '../coords';
import { Cell } from '../cell';

export class Figure {
  public cell: Cell;
  public icon: string;
  public availibleMoves: Array<Coords>;
  public canMove(cell: Cell) {
    return true;
  }
  public getMoves(cell: Cell): Array<Coords> {
      return [];
  }
}
