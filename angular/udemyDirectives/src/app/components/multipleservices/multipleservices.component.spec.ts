import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleservicesComponent } from './multipleservices.component';

describe('MultipleservicesComponent', () => {
  let component: MultipleservicesComponent;
  let fixture: ComponentFixture<MultipleservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipleservicesComponent]
    });
    fixture = TestBed.createComponent(MultipleservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
