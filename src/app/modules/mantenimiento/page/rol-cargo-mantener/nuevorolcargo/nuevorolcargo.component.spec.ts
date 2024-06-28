import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevorolcargoComponent } from './nuevorolcargo.component';

describe('NuevorolcargoComponent', () => {
  let component: NuevorolcargoComponent;
  let fixture: ComponentFixture<NuevorolcargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevorolcargoComponent]
    });
    fixture = TestBed.createComponent(NuevorolcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
