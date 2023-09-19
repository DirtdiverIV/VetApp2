import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetformComponent } from './petform.component';

describe('PetformComponent', () => {
  let component: PetformComponent;
  let fixture: ComponentFixture<PetformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetformComponent]
    });
    fixture = TestBed.createComponent(PetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
