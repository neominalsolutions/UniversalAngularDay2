import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UniversalAngularDay2';
  visible: boolean = false;
  data: any[] = [1, 2, 3, 4, 5];

  dataChange() {
    this.data = [10, 15, 16, 17];
  }
}
