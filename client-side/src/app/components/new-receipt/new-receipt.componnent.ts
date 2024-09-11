import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Customer, Receipt } from "../../modules/interfaces";
import { PaymentMethods } from "../../modules/enums";
import { dateValidation } from "../../validation/date-validation";
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-receipt.componnent.html',
  styleUrl: './new-receipt.componnent.scss'
})

export class NewReceiptComponnent {
  myForm: FormGroup
  customers!: Customer[];
  receiptNum!: number;
  customer!:Customer;
  constructor(private dataService: DataService,private router: Router) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      customerName: new FormControl(''),
      customerNum: new FormControl(''),
      sum: new FormControl(''),
      paymentMethods: new FormControl(''),
      date: new FormControl('', [Validators.required, dateValidation()]),
      description: new FormControl(''),
    })
    this.dataService.AllCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
    this.dataService.getAllInvoices().subscribe((data: Receipt[]) => {
      this.receiptNum = data.map(r => r.receiptNumber).sort((a, b) => b - a)[0]+1

    });
  }

  save() {
    const { controls } = this.myForm
    this.dataService.getCustByName('chaya').subscribe((data: Customer) => {
      this.customer=data     
    });
    let receipt: Receipt = {
      receiptNumber: this.receiptNum,
      customer: this.customer,
      sum: controls['sum'].value,
      paymentMethods: controls['paymentMethods'].value,
      date: controls['date'].value,
      description: controls['description'].value
    }

    this.dataService.addReceipt(receipt).subscribe(data => {
      console.log({ data });
      this.myForm.reset()
      this.router.navigate(['/list']);
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


}