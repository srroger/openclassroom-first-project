import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openclassroom-first-project';
  isAuth = false

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000

    );
  }

  onAllumer() {
    console.log('On allume tout !');
  }

}
