import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private webSocket!: Socket;

  constructor() {
    this.webSocket = new Socket({
      url: '',
      options: {}
    })
  }
}
