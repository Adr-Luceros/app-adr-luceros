import { TestBed } from '@angular/core/testing';

import { RolcargoService } from './rolcargo.service';

describe('RolcargoService', () => {
  let service: RolcargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolcargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
