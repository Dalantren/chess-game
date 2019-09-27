import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private socketService: WebSocketService, private router: Router) { }

  ngOnInit(): void {
    this.socketService.listen('test event').subscribe(data => console.log(data));

    this.socketService.listen('start a new game').subscribe(data => {
      this.router.navigateByUrl('/chess');
    });
  }

  enterQueue(): void {
    console.log(`sending data...`);
    this.socketService.emit('enter queue', { id : Math.random().toString().slice(0, 5)});
    this.socketService.listen('list').subscribe(data => console.log(data));
  }

}
