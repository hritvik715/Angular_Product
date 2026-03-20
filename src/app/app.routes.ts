import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppListComponent } from './app-list/app-list.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppListComponent },
  { path: 'cart', component: CartComponent },
];