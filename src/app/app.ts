import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppListComponent } from './app-list/app-list.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    AppListComponent,
    CartComponent
  ],
  templateUrl: './app.html'
})
export class App {

  user: string = '';
  cart: any[] = [];

  // ✅ SET USER + LOAD CART
  setUser(u: string) {
    this.user = u;

    const data = localStorage.getItem(this.user);
    this.cart = data ? JSON.parse(data) : [];
  }

  // ✅ ADD TO CART
  // addToCart(app: any) {
  //   this.cart.push(app);

  //   // save per user
  //   localStorage.setItem(this.user, JSON.stringify(this.cart));
  // }

  // ✅ iss vaale function se duplicate add hone se bachega
  // addToCart(app: any) {
  //   const exists = this.cart.find(item => item.name === app.name);

  //   if (!exists) {
  //     this.cart.push(app);

  //     localStorage.setItem(this.user, JSON.stringify(this.cart));
  //   }
  // }

  addToCart(app: any) {
  const existing = this.cart.find(item => item.name === app.name);

  if (existing) {
    existing.qty += 1;
  } else {
    this.cart.push({ ...app, qty: 1 });
  }

  localStorage.setItem(this.user, JSON.stringify(this.cart));
}


   // ✅ REMOVE FROM CART
  removeFromCart(item: any) {
  this.cart = this.cart.filter(i => i.name !== item.name);

  localStorage.setItem(this.user, JSON.stringify(this.cart));
  }

  increase(item: any) {
  item.qty += 1;
  localStorage.setItem(this.user, JSON.stringify(this.cart));
}

  decrease(item: any) {
    item.qty -= 1;

    if (item.qty <= 0) {
      this.removeFromCart(item);
    } else {
      localStorage.setItem(this.user, JSON.stringify(this.cart));
    }
  }

  // ✅ GET TOTAL SUM IN THE UI
  // getTotal() {
  //   return this.cart.reduce((sum, item) => sum + item.price, 0);
  // }



  getTotal() {
  return this.cart.reduce(
    (sum, item) => sum + (item.price * (item.qty || 1)),
    0
  );
}
}