import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesIncomeByMonthComponent } from './expenses-Incomes.component';

describe('ExpenseExpensesIncomeByMonthComponentsByMonthComponent', () => {
  let component: ExpensesIncomeByMonthComponent;
  let fixture: ComponentFixture<ExpensesIncomeByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesIncomeByMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesIncomeByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
