import { TestBed } from '@angular/core/testing';

import { ViajeTransferService } from './viaje-transfer.service';

describe('ViajeTransferService', () => {
  let service: ViajeTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
