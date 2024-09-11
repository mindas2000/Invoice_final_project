import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Supplier } from '../../modules/interfaces';
import { SupplierComponent } from '../supplier/supplier.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, SupplierComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {
  @Input() expenses: {
    date: Date,
    amount: number,
    supplier: Supplier,
    paymentMethods: string,
    detail: string
  } | undefined
}
