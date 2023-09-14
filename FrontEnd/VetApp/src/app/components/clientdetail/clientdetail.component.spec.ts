import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientdetailComponent } from './clientdetail.component';

describe('ClientdetailComponent', () => {
  let component: ClientdetailComponent;
  let fixture: ComponentFixture<ClientdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientdetailComponent]
    });
    fixture = TestBed.createComponent(ClientdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
