import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular 7 – Virtual Scrolling';
  scrollingItems: number[] = [];

  constructor() {
    for (let i = 0; i < 5000; i++) {
      this.scrollingItems.push(i);
    }
  }

}
