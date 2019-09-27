import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chess-game';

  constructor() { }

  ngOnInit(): void { }
}
