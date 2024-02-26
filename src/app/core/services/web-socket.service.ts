import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: Socket;

  constructor() {
    this.scheduleConnection();
  }

  scheduleConnection() {
    let task: ReturnType<typeof setTimeout> | null = null;
    const timeout = 5000;
  
    return () => {
      if (task) return;
      console.log('scheduled starting in ' + timeout + ' ms');
      task = setTimeout(() => {
        this.start();
        task = null;
      }, timeout);
    };
  }

  connect() {
    this.socket = io('https://localhost:4443', {
      rejectUnauthorized: false,
      autoConnect: false,
      reconnection: false
    });

    this.socket.connect();

    this.socket.on('connect', () => {
      console.log('socker connected');
      this.scheduleConnection();
    })
  }

  start() {
    this.socket.emit('start', {
      _id: this.getId()
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  private getId() {
    return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
  }
}