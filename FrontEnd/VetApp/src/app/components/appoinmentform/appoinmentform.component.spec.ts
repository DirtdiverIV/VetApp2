import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentformComponent } from './appoinmentform.component';

describe('AppointmentformComponent', () => {
  let component: AppointmentformComponent;
  let fixture: ComponentFixture<AppointmentformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentformComponent]
    });
    fixture = TestBed.createComponent(AppointmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
