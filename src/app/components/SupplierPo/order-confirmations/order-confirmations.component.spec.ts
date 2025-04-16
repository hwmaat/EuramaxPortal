import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmationsComponent } from './order-confirmations.component';

describe('OrderConfirmationsComponent', () => {
  let component: OrderConfirmationsComponent;
  let fixture: ComponentFixture<OrderConfirmationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderConfirmationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirmationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
