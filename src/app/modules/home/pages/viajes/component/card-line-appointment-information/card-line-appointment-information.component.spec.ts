import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLineAppointmentInformationComponent } from './card-line-appointment-information.component';

describe('CardLineAppointmentInformationComponent', () => {
  let component: CardLineAppointmentInformationComponent;
  let fixture: ComponentFixture<CardLineAppointmentInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLineAppointmentInformationComponent]
    });
    fixture = TestBed.createComponent(CardLineAppointmentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
