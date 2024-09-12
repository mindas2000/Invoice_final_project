import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Expenses, Receipt } from '../../modules/interfaces';
import { ReceiptComponent } from '../receipt/receipt.component';
import { ExpensesComponent } from '../expenses/expenses.component';
@Component({
  selector: 'app-expenses-Incomes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ReceiptComponent, ExpensesComponent],
  templateUrl: './expenses-Incomes.component.html',
  styleUrl: './expenses-Incomes.component.scss'
})
export class ExpensesIncomesComponent {
  myForm: FormGroup;
  expenses: Array<Expenses> = [];
  incomes: Array<Receipt> = [];
  messege: string = 'Press month';

  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      options: new FormControl(''),
      time: new FormControl('')
    });
  }
  updateLabel() {
    const { controls } = this.myForm;
    this.messege = controls['time'].value === 'month' ? 'Press month' : 'Press year';
  }
  submit() {
    const { controls } = this.myForm;
    if (controls['time'].value === 'month') {
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByMonth(controls['number'].value).subscribe((ex: Array<Expenses>) => {
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'incomes') {
        this.dataService.getIncomeByMonth(controls['number'].value).subscribe((inco: Array<Receipt>) => {
          this.incomes = inco;
        });
      }
    }
    if (controls['time'].value === 'year') {
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByYear(controls['number'].value).subscribe((ex: Array<Expenses>) => {
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'incomes') {
        this.dataService.getIncomeByYear(controls['number'].value).subscribe((inco: Array<Receipt>) => {
          this.incomes = inco;
        });
      }
    }
  }
}