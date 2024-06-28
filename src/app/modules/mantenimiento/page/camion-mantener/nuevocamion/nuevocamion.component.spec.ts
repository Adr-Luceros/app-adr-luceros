import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocamionComponent } from './nuevocamion.component';

describe('NuevocamionComponent', () => {
  let component: NuevocamionComponent;
  let fixture: ComponentFixture<NuevocamionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevocamionComponent]
    });
    fixture = TestBed.createComponent(NuevocamionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
