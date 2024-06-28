import { EventEmitter, Injectable } from '@angular/core';
import { ViajeExcel } from '../../index.model.entity';

@Injectable({
  providedIn: 'root'
})
export class ViajeTransferService {
  viajeTransfer$: EventEmitter<ViajeExcel> = new EventEmitter<ViajeExcel>();
}
