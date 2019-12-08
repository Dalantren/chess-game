import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    private roomsCount = 0;
    private fullRooms: Array<string> = [];
    private freeRooms: Array<string> = [];

  constructor(private socketService: WebSocketService, private router: Router) { }

  ngOnInit(): void {
    this.socketService.listen('start game').subscribe(({ roomId }) => {
      this.router.navigateByUrl(`/chess/${roomId}`);
    });

    this.socketService.listen('rooms availible').subscribe( roomsInfo => {
        this.roomsCount = roomsInfo.count;
        this.fullRooms = roomsInfo.full;
        this.freeRooms = roomsInfo.free;
    });
  }

  public joinRoom(roomId: string): void {
    this.socketService.emit('join room', { roomId });
  }

  public createRoom(): void {
      this.socketService.emit('create room', {});
  }
}
