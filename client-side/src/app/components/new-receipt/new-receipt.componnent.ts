import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Customer, Receipt } from "../../modules/interfaces";
import { PaymentMethods } from "../../modules/enums";
import { dateValidation } from "../../validation/date-validation";

@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-receipt.componnent.html',
  styleUrl: './new-receipt.componnent.scss'
})

export class NewReceiptComponnent {
  myForm: FormGroup
  customers: Array<Customer>
  constructor(private dataService: DataService) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      customerName: new FormControl(''),
      customerNum: new FormControl(''),
      sum: new FormControl(''),
      paymentMethods: new FormControl(''),
      date: new FormControl('', [Validators.required, dateValidation()]),
      description: new FormControl(''),
    })
    // this.customers=dataService.AllCustomers().subcribe(data=>{});
    // מערך זמני עד שהפונקצה דלהיל תעבוד
    this.customers=[{name:'bbb',number:'15'},
    {name:'zzz',number:'16'},
    {name:'aaa',number:'17'},
    {name:'sss',number:'18'}]
  }

  save() {
    const { controls } = this.myForm
    let cust={name:controls['customerNum'].value,number:controls['customerNum'].value}
    let receipt: Receipt = {
      receiptNumber: 0,
      customer: cust,
      sum: controls['sum'].value,
      paymentMethods: controls['paymentMethods'].value,
      date: controls['date'].value,
      description: controls['description'].value
    }
    console.log({receipt});
    
    this.dataService.addReceipt(receipt).subscribe(data => {
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
      const message = 'hey,the date need to be before today'
      return message;
    }
    return 'its ok'
  }
  receiptNumber(private dataService: DataService){
dataService.lastNumber
  }

}