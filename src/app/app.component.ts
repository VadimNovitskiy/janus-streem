import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebSocketService } from './core/services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  connected = false;

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
  }

  toggleConnection() {
    if (this.connected) {
      this.webSocketService.disconnect();
    } 
    this.webSocketService.connect();

    this.connected !== this.connected;
  }

  startEchoTest() {
    this.webSocketService.start();
  }
}