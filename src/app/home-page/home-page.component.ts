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
    private emptyRooms: Array<string> = [];

  constructor(private socketService: WebSocketService, private router: Router) { }

  ngOnInit(): void {
    this.socketService.listen('start a new game').subscribe(({ roomId }) => {
      this.router.navigateByUrl(`/chess/${roomId}`);
    });

    this.socketService.listen('rooms availible').subscribe( roomsInfo => {
        this.roomsCount = roomsInfo.roomsCount;
        this.fullRooms = roomsInfo.fullRooms;
        this.emptyRooms = roomsInfo.emptyRooms;
    });

    this.socketService.listen('new room').subscribe(({ roomsInfo, roomId }) => {

    });
  }

  joinQueue(): void {
    this.socketService.emit('join queue', { id : +Math.random().toString().slice(2, 5) });
  }

  public createRoom(): void {
      this.socketService.emit('create room', {});
  }
}
