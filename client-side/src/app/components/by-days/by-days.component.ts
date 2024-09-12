import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Expenses, Receipt } from '../../modules/interfaces';
import { ExpensesComponent } from '../expenses/expenses.component';
import { ReceiptComponent } from '../receipt/receipt.component';

@Component({
  selector: 'app-by-days',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ExpensesComponent,ReceiptComponent],
  templateUrl: './by-days.component.html',
  styleUrl: './by-days.component.scss'
})
export class ByDaysComponent {
  show = false
  myForm: FormGroup;
  receipts: Receipt[]=[]
  expenses: Expenses[]=[]
  constructor(private dateService: DataService) {
    this.myForm = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      options: new FormControl('', [Validators.required])
    })

  }

  save() {
    const { controls } = this.myForm
    let start = controls['startDate'].value
    let end = controls['endDate'].value
    let option = controls['options'].value
    if (option === 'incomes')
      this.dateService.getInvoiceBetweenDays(start, end).subscribe((data: Receipt[]) => {
        this.receipts = data
        this.show = true
      })
    else {
      this.dateService.getExpenceBetweenDays(start, end).subscribe((data: Expenses[]) => {
        this.expenses = data
        this.show = true

      })
    }



  }
}
