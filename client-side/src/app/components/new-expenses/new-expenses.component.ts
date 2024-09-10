import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Supplier, Expenses } from '../../modules/interfaces';
import { dateValidation } from "../../validation/date-validation";

@Component({
  selector: 'app-new-expenses',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-expenses.component.html',
  styleUrl: './new-expenses.component.scss'
})
export class NewExpensesComponent {
  myForm: FormGroup
  suppliers: Array<Supplier>
  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      date: new FormControl('', [Validators.required, dateValidation()]),
      amount: new FormControl(''),
      supplierName: new FormControl(''),
      supplierNum: new FormControl(''),
      paymentMethods: new FormControl(''),
      detail: new FormControl('')
    })
    // this.dataService.getAllSuppliers().subscribe((sup: Array<Supplier>) => {
    //   this.suppliers = sup;
    // });
    // מערך זמני עד שהפונקצה דלהיל תעבוד
    this.suppliers = [{ name: 'bbb', number: '15' },
    { name: 'zzz', number: '16' },
    { name: 'aaa', number: '17' },
    { name: 'sss', number: '18' }]
  }

  save() {
    const { controls } = this.myForm
    let sup = { name: controls['supplierName'].value, number: controls['supplierNum'].value }
    let expenses: Expenses = {
      date: controls['date'].value,
      amount: controls['amount'].value,
      supplier: sup,
      paymentMethods: controls['paymentMethods'].value,
      detail: controls['detail'].value
    }
    console.log({ expenses });

    this.dataService.addExpenses(expenses).subscribe(data => {
      console.log({ data });
      this.myForm.reset()
    })
  }
  getControlErrorsString(controlName: string) {
    return JSON.stringify(this.myForm.controls[controlName].errors)
  }

  getStartDateErrorString() {
    const error = this.myForm.controls['date'].errors?.['date']
    if (error) {
      const message = 'hey, the date need to be before today'
      return message;
    }
    return 'its ok'
  }
}
