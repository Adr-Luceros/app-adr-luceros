import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMantenerComponent } from './tienda-mantener.component';

describe('TiendaMantenerComponent', () => {
  let component: TiendaMantenerComponent;
  let fixture: ComponentFixture<TiendaMantenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiendaMantenerComponent]
    });
    fixture = TestBed.createComponent(TiendaMantenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
