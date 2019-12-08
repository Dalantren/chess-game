import { Component, OnInit  } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { PlayersService } from './services/players.service';
import { ChessColors } from '../core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {

    constructor(
      private socket: WebSocketService,
      private playersService: PlayersService,
    ) { }

    ngOnInit() {
      this.socket.listen('add players').subscribe(({ id: roomId, players }) => {
        players.forEach(({ id, color }) => {
          const player = this.playersService.add(id, color);
          if (this.socket.socket.id === id) {
            this.playersService.me = player;
          }
          if (color === ChessColors.WHITE) {
            player.startMove();
          }
        });
    });
    }
}
