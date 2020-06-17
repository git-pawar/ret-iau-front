import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrescriptionsComponent } from './add-prescriptions.component';

describe('AddPrescriptionsComponent', () => {
  let component: AddPrescriptionsComponent;
  let fixture: ComponentFixture<AddPrescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
