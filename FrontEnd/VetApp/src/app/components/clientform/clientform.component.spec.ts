import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientformComponent } from './clientform.component';

describe('ClientformComponent', () => {
  let component: ClientformComponent;
  let fixture: ComponentFixture<ClientformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientformComponent]
    });
    fixture = TestBed.createComponent(ClientformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
