import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ListReceiptComponent } from './components/list-receipt/list-receipt.component';
import { NewReceiptComponnent } from './components/new-receipt/new-receipt.componnent';
import { ReceiptComponent } from './components/receipt/receipt.component';
import {ExpensesComponent} from './components/expenses/expenses.component';
import { NewExpensesComponent } from './components/new-expenses/new-expenses.component';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,CustomerComponent, ListReceiptComponent, NewReceiptComponnent, ReceiptComponent,ExpensesComponent,NewExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client-side';
}



