import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  showPassword: boolean = false;
  log = [];

  onResetUser = () => {
    this.username = '';
  }

  onDisplay = () => {
    this.showPassword = !this.showPassword;
    this.log.push(this.log.length + 1);
  }
}
