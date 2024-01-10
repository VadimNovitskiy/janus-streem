import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  startCall() {
    const videoMedia = navigator.mediaDevices.getUserMedia({
      video: {
        width: {ideal: 720},
        height: {ideal: 480}
      }, 
      audio: true
    });

    console.log(videoMedia);
  }
}
