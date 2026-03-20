import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      alert('Enter credentials');
      return;
    }

    // ✅ Save user
    localStorage.setItem('user', this.username);

    // ✅ Navigate to home page
    this.router.navigate(['/home']);
  }
}