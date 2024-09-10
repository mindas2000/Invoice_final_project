import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Customer } from '../../modules/interfaces';
import { CustomerComponent } from '../customer/customer.component';

@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule,CustomerComponent],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.scss'
})
export class ReceiptComponent {
  @Input() receipt: {
    receiptNumber: number,
    customer: Customer,
    sum: number,
    paymentMethods: string,
    date: Date,
    description: string
  } | undefined




}



