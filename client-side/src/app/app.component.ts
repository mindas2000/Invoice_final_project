import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ListReceiptComponent } from './components/list-receipt/list-receipt.component';
import { NewReceiptComponnent } from './components/new-receipt/new-receipt.componnent';
import { ReceiptComponent } from './components/receipt/receipt.component';
import {ExpensesComponent} from './components/expenses/expenses.component';
import { NewExpensesComponent } from './components/new-expenses/new-expenses.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    CustomerComponent,
    ListReceiptComponent,
    NewReceiptComponnent,
    ReceiptComponent,
    ExpensesComponent,
    NewExpensesComponent,
    NavbarComponent],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-side';
}



