import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateFormsComponent } from './person-template-forms.component';

describe('PersonTemplateFormsComponent', () => {
  let component: PersonTemplateFormsComponent;
  let fixture: ComponentFixture<PersonTemplateFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonTemplateFormsComponent]
    });
    fixture = TestBed.createComponent(PersonTemplateFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
