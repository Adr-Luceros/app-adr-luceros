import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickingsComponent } from './pickings.component';

describe('PickingsComponent', () => {
  let component: PickingsComponent;
  let fixture: ComponentFixture<PickingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickingsComponent]
    });
    fixture = TestBed.createComponent(PickingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
