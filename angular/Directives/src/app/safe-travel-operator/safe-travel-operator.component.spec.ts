import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTravelOperatorComponent } from './safe-travel-operator.component';

describe('SafeTravelOperatorComponent', () => {
  let component: SafeTravelOperatorComponent;
  let fixture: ComponentFixture<SafeTravelOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafeTravelOperatorComponent]
    });
    fixture = TestBed.createComponent(SafeTravelOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
