import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedhistoryformComponent } from './medhistoryform.component';

describe('MedhistoryformComponent', () => {
  let component: MedhistoryformComponent;
  let fixture: ComponentFixture<MedhistoryformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedhistoryformComponent]
    });
    fixture = TestBed.createComponent(MedhistoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
