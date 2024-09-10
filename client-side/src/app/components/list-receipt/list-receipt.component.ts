import { Component } from '@angular/core';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Receipt } from '../../modules/interfaces';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { PaymentMethods } from '../../modules/enums';

@Component({
  selector: 'app-list-receipt',
  standalone: true,
  imports: [CommonModule,ReceiptComponent],
  templateUrl: './list-receipt.component.html',
  styleUrl: './list-receipt.component.scss'
})
export class ListReceiptComponent {
  receipts: Array<Receipt>
  constructor(private dataService: DataService) {
    // זמנית
    this.receipts = [{  receiptNumber: 0,
      customer: {name:'aaa',number:'15875'},
      sum: 154,
      paymentMethods:'cash',
      date:new Date("12/05/2024"),
      description:'string1'},
      {  receiptNumber: 1,
        customer: {name:'bbb',number:'8588'},
        sum: 258,
        paymentMethods:'credit',
        date:new Date(),
        description:'string2'}]
    // this.receipts = this.dataService.AllReceipts()
  }
}
