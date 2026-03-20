import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent {

  cart: any[] = [];
  user: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = localStorage.getItem('user');

    if (this.user) {
      const data = localStorage.getItem(this.user);
      this.cart = data ? JSON.parse(data) : [];
    }
  }

  increase(item: any) {
    item.qty = (item.qty || 1) + 1;
    this.save();
  }

  decrease(item: any) {
    item.qty = (item.qty || 1) - 1;

    if (item.qty <= 0) {
      this.remove(item);
    } else {
      this.save();
    }
  }

  remove(item: any) {
    this.cart = this.cart.filter(i => i.name !== item.name);
    this.save();
  }

  save() {
    if (this.user) {
      localStorage.setItem(this.user, JSON.stringify(this.cart));
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  getTotal() {
    return this.cart.reduce(
      (sum, item) => sum + (item.price * (item.qty || 1)),
      0
    );
  }
}