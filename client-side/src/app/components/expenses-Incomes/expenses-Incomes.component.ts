import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { DataService } from "../../services/data.service";
import { Expenses, Receipt } from '../../modules/interfaces';

@Component({
  selector: 'app-expenses-by-month',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './expenses-Incomes.component.html',
  styleUrl: './expenses-Incomes.component.scss'
})
export class ExpensesIncomesComponent {
  myForm: FormGroup;
  expenses: Array<Expenses> = [];
  income: Array<Receipt> = [];
  messege: string = 'Press month';

  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      options: new FormControl(''),
      time:new FormControl('')
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
          console.log(ex);
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'income') {
        this.dataService.getIncomeByMonth(controls['number'].value).subscribe((inco: Array<Receipt>) => {
          console.log(inco);
          this.income = inco;
        });
      }
    }
    if (controls['time'].value === 'year') {
      if (controls['options'].value === 'expenses') {
        this.dataService.getExpensesByYear(controls['number'].value).subscribe((ex: Array<Expenses>) => {
          console.log(ex);
          this.expenses = ex;
        });
      }
      if (controls['options'].value === 'income') {
        this.dataService.getIncomeByYear(controls['number'].value).subscribe((inco: Array<Receipt>) => {
          console.log(inco);
          this.income = inco;
        });
      }
    }
  }
}