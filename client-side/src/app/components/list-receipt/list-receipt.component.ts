import { Component, Input } from '@angular/core';
import { ReceiptComponent } from '../receipt/receipt.component';
import { Receipt } from '../../modules/interfaces';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { PaymentMethods } from '../../modules/enums';

@Component({
  selector: 'app-list-receipt',
  standalone: true,
  imports: [CommonModule, ReceiptComponent],
  templateUrl: './list-receipt.component.html',
  styleUrl: './list-receipt.component.scss'
})
export class ListReceiptComponent {
  @Input() whatTo!: string
  receipts!: Array<Receipt>
  constructor(private dataService: DataService) {

    this.dataService.getAllInvoices().subscribe((data: Receipt[]) => {
      this.receipts = data
    })

  }
}



