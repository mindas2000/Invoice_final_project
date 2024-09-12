import { Routes } from '@angular/router';
import { NewReceiptComponnent } from './components/new-receipt/new-receipt.componnent';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ListReceiptComponent } from './components/list-receipt/list-receipt.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NewExpensesComponent } from './components/new-expenses/new-expenses.component';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { ExpensesIncomesComponent } from './components/expenses-Incomes/expenses-Incomes.component';
import { ByDaysComponent } from './components/by-days/by-days.component';
import { ByCustomerComponent } from './components/by-customer/by-customer.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
export const routes: Routes = [
    { path: 'newReceipt', component: NewReceiptComponnent },
    { path: 'customer', component: CustomerComponent },
    { path: 'list', component: ListReceiptComponent },
    { path: 'listExpenses', component: ListExpensesComponent },
    { path: 'receipt', component: ReceiptComponent },
    { path: 'saving expenses', component: NewExpensesComponent },
    { path: 'data segmentation', component: DataSegmentationComponent },
    { path: 'expenses-Incomes', component: ExpensesIncomesComponent },
    { path: 'bydays', component: ByDaysComponent },
    { path: 'bycustomer', component: ByCustomerComponent },

];

