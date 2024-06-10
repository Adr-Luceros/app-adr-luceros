import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajecargadoComponent } from './viajecargado.component';

describe('ViajecargadoComponent', () => {
  let component: ViajecargadoComponent;
  let fixture: ComponentFixture<ViajecargadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViajecargadoComponent]
    });
    fixture = TestBed.createComponent(ViajecargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
