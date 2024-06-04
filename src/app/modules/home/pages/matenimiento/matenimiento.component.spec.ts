import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatenimientoComponent } from './matenimiento.component';

describe('MatenimientoComponent', () => {
  let component: MatenimientoComponent;
  let fixture: ComponentFixture<MatenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatenimientoComponent]
    });
    fixture = TestBed.createComponent(MatenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
