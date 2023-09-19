import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentformComponent } from './appoinmentform.component';

describe('AppoinmentformComponent', () => {
  let component: AppoinmentformComponent;
  let fixture: ComponentFixture<AppoinmentformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentformComponent]
    });
    fixture = TestBed.createComponent(AppoinmentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
