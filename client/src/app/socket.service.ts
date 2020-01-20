import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  readonly SERVER_URL: string = '//localhost:3000';

  constructor() {
    this.initSocket();
  }

  private socket: any;

  public initSocket(): void {
    this.socket = socketIo(this.SERVER_URL);
  }

  public listen(eventName: string): Observable<any> {
    return new Observable(subscriber => {
      this.socket.on(eventName, (data: any) => subscriber.next(data));
    });
  }

  public send(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  public getId(): string {
    return this.socket.id;
  }
}
