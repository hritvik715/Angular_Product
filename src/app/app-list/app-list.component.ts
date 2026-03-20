import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-list.html',
  styleUrl: './app-list.css'
})
export class AppListComponent {

  constructor(private router: Router) {}

  apps = [
    { name: 'Instagram', price: 45 },
    { name: 'Spotify', price: 99 },
    { name: 'Netflix', price: 199 },
    { name: 'YouTube Premium', price: 129 },
    { name: 'Amazon Prime', price: 149 }
  ];

  add(app: any) {
    const user = localStorage.getItem('user');

    if (!user) return;

    const data = localStorage.getItem(user);
    let cart = data ? JSON.parse(data) : [];

    const existing = cart.find((item: any) => item.name === app.name);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...app, qty: 1 });
    }

    localStorage.setItem(user, JSON.stringify(cart));
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}