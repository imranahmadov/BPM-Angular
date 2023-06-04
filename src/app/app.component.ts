import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bpm-angular';
  parentData: any;

  doSmth(event: any) {
    this.parentData = event;
  }
}
