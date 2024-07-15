import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNHoldComponent } from './buy-n-hold.component';

describe('BuyNHoldComponent', () => {
  let component: BuyNHoldComponent;
  let fixture: ComponentFixture<BuyNHoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyNHoldComponent]
    });
    fixture = TestBed.createComponent(BuyNHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
