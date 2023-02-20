import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Fotos de anime';

  public imagesLocation: string[] = [
    '/assets/download.jpg',
    '/assets/download (1).jpg',
    '/assets/images.jpg',
    '/assets/images (1).jpg',
    '/assets/away.jpg',
  ];
}
