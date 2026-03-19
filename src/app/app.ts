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
}