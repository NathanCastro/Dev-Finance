import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InFinanceComponent } from './in-finance.component';

describe('InFinanceComponent', () => {
  let component: InFinanceComponent;
  let fixture: ComponentFixture<InFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
