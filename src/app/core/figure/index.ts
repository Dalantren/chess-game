import { Cell } from '../cell';
import { Player } from '../player';
import { Board } from '../board';

export class Figure {

  constructor(public player: Player, protected board: Board, protected cell: Cell) {
    this.color = this.player.color;
    this.availibleMoves = this.getMoves();
  }

  public icon: string;
  public color: 'black' | 'white';
  public availibleMoves: Array<Cell>;
  public canMove(cell: Cell) {
    return true;
  }
  public getMoves(): Array<Cell> {
      return [];
  }
}
