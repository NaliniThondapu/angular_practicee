import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartChecinComponent } from './start-checin.component';

describe('StartChecinComponent', () => {
  let component: StartChecinComponent;
  let fixture: ComponentFixture<StartChecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartChecinComponent]
    });
    fixture = TestBed.createComponent(StartChecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
