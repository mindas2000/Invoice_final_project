import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesIncomesComponent } from './expenses-Incomes.component';

describe('ExpenseExpensesIncomeByMonthComponentsByMonthComponent', () => {
  let component: ExpensesIncomesComponent;
  let fixture: ComponentFixture<ExpensesIncomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesIncomesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
