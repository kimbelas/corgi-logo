import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlinkingTextComponent } from './blinking-text.component';

describe('BlinkingTextComponent', () => {
  let component: BlinkingTextComponent;
  let fixture: ComponentFixture<BlinkingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlinkingTextComponent]
    });
    fixture = TestBed.createComponent(BlinkingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
