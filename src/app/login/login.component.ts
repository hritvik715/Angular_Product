import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {

  username = '';
  password = '';

  @Output() loginEvent = new EventEmitter<string>();

  login() {
    if (!this.username || !this.password) {
      alert('Enter credentials');
      return;
    }

    this.loginEvent.emit(this.username);
  }
}