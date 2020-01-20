import { Component, OnInit  } from '@angular/core';
import { SocketService } from '../socket.service';
import { PlayersService } from './services/players.service';
import { ChessColors } from '../core';
import { EVENTS } from '../../socketEventsList';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

    constructor(
      private socket: SocketService,
      private playersService: PlayersService,
    ) { }

    ngOnInit() {
      this.socket.listen(EVENTS.ADD_PLAYERS).subscribe(({ id: roomId, players }) => {
        players.forEach(({ id, color }) => {
          const player = this.playersService.add(id, color);
          if (this.socket.getId() === id) {
            this.playersService.me = player;
          }
          if (color === ChessColors.WHITE) {
            player.startMove();
          }
        });
    });
    }
}
