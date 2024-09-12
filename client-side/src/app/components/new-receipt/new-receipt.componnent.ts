import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";
import { Customer, Receipt } from "../../modules/interfaces";
import { dateValidation } from "../../validation/date-validation";


@Component({
  selector: 'app-new-receipt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-receipt.componnent.html',
  styleUrl: './new-receipt.componnent.scss'
})

export class NewReceiptComponnent {

  defaultCustomerName: string = 'Select Customer';
  myForm: FormGroup
  custForm: FormGroup
  customers!: Customer[];
  receiptNum!: number;
  customer!: Customer;
  show = false
  constructor(private dataService: DataService, private router: Router) {
    this.myForm = new FormGroup({
      number: new FormControl(''),
      customerName: new FormControl(''),
      sum: new FormControl(''),
      paymentMethods: new FormControl(''),
      date: new FormControl('', [Validators.required, dateValidation()]),
      description: new FormControl(''),
    })
    this.custForm = new FormGroup({
      nameCust: new FormControl('', [Validators.required]),
      numberCust: new FormControl('', [Validators.required])
    })
    this.dataService.AllCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
    this.dataService.getAllInvoices().subscribe((data: Receipt[]) => {
      this.receiptNum = data.map(r => r.receiptNumber).sort((a, b) => b - a)[0] + 1

    });
  }

  save() {
    const { controls } = this.myForm
    this.dataService.getCustByName(controls['customerName'].value).subscribe((data: Customer) => {
      this.customer = data
      let receipt: Receipt = {
        receiptNumber: this.receiptNum,
        customer: this.customer,
        sum: controls['sum'].value,
        paymentMethods: controls['paymentMethods'].value,
        date: controls['date'].value,
        description: controls['description'].value
      }

      this.dataService.addReceipt(receipt).subscribe(data => {
        this.myForm.reset()
        this.router.navigate(['/list']);
      })
    });

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
    return ''
  }
  add() {
    this.show = true
  }
  saveCustomer() {
    this.show = !this.show
    const { controls } = this.custForm
    this.defaultCustomerName = controls['nameCust'].value
    let newCustomer: Customer = {
      name: controls['nameCust'].value,
      number: controls['numberCust'].value
    }
    this.dataService.addCustomer(newCustomer).subscribe((data: Customer) => {
      this.custForm.reset()
    })

  }


}