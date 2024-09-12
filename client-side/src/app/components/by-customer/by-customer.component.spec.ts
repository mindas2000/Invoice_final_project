import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCustomerComponent } from './by-customer.component';

describe('ByCustomerComponent', () => {
  let component: ByCustomerComponent;
  let fixture: ComponentFixture<ByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
