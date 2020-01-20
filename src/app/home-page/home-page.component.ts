import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { Router } from '@angular/router';
import { EVENTS } from '../../socketEventsList'; 

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
    this.socketService.listen(EVENTS.START_GAME).subscribe(({ roomId }) => {
      this.router.navigateByUrl(`/chess/${roomId}`);
    });

    this.socketService.listen(EVENTS.ROOMS_AVAILIBLE).subscribe( roomsInfo => {
        this.roomsCount = roomsInfo.count;
        this.fullRooms = roomsInfo.full;
        this.freeRooms = roomsInfo.free;
    });
  }

  public joinRoom(roomId: string): void {
    this.socketService.emit(EVENTS.JOIN_ROOM, { roomId });
  }

  public createRoom(): void {
      this.socketService.emit(EVENTS.CREATE_ROOM, {});
  }
}
