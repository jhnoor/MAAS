import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'maas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('hardwareVideo') hardwareVideo: any;

  constructor() { }

  ngOnInit() {
    const video = this.hardwareVideo.nativeElement;

    const n = <any>navigator;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);

    n.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    });
  }
}
