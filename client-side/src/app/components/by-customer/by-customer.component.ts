import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Customer } from '../../modules/interfaces';
import { Receipt } from '../../modules/interfaces';
import { ReceiptComponent } from '../receipt/receipt.component';
@Component({
  selector: 'app-by-customer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ReceiptComponent],
  templateUrl: './by-customer.component.html',
  styleUrl: './by-customer.component.scss',
})
export class ByCustomerComponent {
  myForm: FormGroup;
  receipts!:Receipt[]
  show=false
  customers!: Customer[]
  constructor(private dataService:DataService) {
    this.myForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
    })
    this.dataService.AllCustomers().subscribe(data => {
      this.customers = data
    })
  }


  save() {
    const { controls } = this.myForm
    let name = controls['customerName'].value
    this.dataService.getInvoicesByCustName(name).subscribe((data:Receipt[])=>{
      this.show=true
      this.receipts=data
    })

  }
}













