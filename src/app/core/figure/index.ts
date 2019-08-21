import { Coords } from '../coords';

export class Figure {
  public coords: Coords;
  public icon: string;
  public player: number;
  public availibleMoves: Array<Coords>;
  public canMove(coords: Coords) {
    return true;
  }
  public getMoves(coords: Coords): Array<Coords> {
      return [];
  }
}
