import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { Player } from '../../core/player';

@Component({
  selector: 'felled-figures',
  templateUrl: './felled-figures.component.html',
  styleUrls: ['./felled-figures.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FelledFiguresComponent implements OnInit {
  @Input() player: Player;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

}
