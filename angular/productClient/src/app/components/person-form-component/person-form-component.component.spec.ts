import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormComponentComponent } from './person-form-component.component';

describe('PersonFormComponentComponent', () => {
  let component: PersonFormComponentComponent;
  let fixture: ComponentFixture<PersonFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonFormComponentComponent]
    });
    fixture = TestBed.createComponent(PersonFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
