import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStructuralDirectiveComponent } from './custom-structural-directive.component';

describe('CustomStructuralDirectiveComponent', () => {
  let component: CustomStructuralDirectiveComponent;
  let fixture: ComponentFixture<CustomStructuralDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomStructuralDirectiveComponent]
    });
    fixture = TestBed.createComponent(CustomStructuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
