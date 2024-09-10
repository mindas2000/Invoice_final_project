import { Routes } from '@angular/router';
import { NewReceiptComponnent } from './components/new-receipt/new-receipt.componnent';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { ListReceiptComponent } from './components/list-receipt/list-receipt.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
    { path: 'newReceipt', component: NewReceiptComponnent },
    { path: 'customer', component: CustomerComponent },
    { path: 'list', component: ListReceiptComponent },
    { path: 'receipt', component: ReceiptComponent },

];

