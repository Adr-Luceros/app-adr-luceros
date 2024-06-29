import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevotiendaComponent } from './nuevotienda.component';

describe('NuevotiendaComponent', () => {
  let component: NuevotiendaComponent;
  let fixture: ComponentFixture<NuevotiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevotiendaComponent]
    });
    fixture = TestBed.createComponent(NuevotiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
