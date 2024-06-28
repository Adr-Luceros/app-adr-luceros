import { EventEmitter, Injectable } from '@angular/core';
import { ViajeExcel } from '../../index.model.frontend';

@Injectable({
  providedIn: 'root'
})
export class ViajeTransferService {
  viajeTransfer$: EventEmitter<ViajeExcel> = new EventEmitter<ViajeExcel>();
}
