import { Player } from '../player';
import { Board } from '../board';

export class Figure {

  constructor(public player: Player, protected board: Board) {
    this.color = this.player.color;
    this.id = player.figures.length;
    player.figures.push(this);
  }

  public id: number;
  public icon: string;
  public color: 'black' | 'white';
  public firstMove = true;
}
