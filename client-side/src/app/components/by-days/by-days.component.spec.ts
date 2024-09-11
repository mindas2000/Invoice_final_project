import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDaysComponent } from './by-days.component';

describe('ByDaysComponent', () => {
  let component: ByDaysComponent;
  let fixture: ComponentFixture<ByDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
