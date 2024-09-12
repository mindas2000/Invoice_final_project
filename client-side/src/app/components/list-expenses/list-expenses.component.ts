import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Expenses } from '../../modules/interfaces';
import { ExpensesComponent } from '../expenses/expenses.component';
@Component({
  selector: 'app-list-expenses',
  standalone: true,
  imports: [CommonModule, ExpensesComponent],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent {
  @Input() whatTo!: string
  expenses!: Array<Expenses>
  constructor(private dataService: DataService) {

    this.dataService.getAllExpenses().subscribe((data: Array<Expenses>) => {
      this.expenses = data;
    })

  }
}