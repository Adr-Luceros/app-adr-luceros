import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViajeExcel } from 'src/app/core/index.model.frontend';
import { ViajeTransferService } from 'src/app/core/index.service.transferm';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-card-line-viaje',
  templateUrl: './card-line-viaje.component.html',
  styleUrls: ['./card-line-viaje.component.css']
})
export class CardLineViajeComponent {

  @Input() public viaje: ViajeExcel = new ViajeExcel();

  modalSubcription: Subscription = new Subscription();
  viajeTransfermSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private viajeTransfermSrv: ViajeTransferService
  ) { }

  public activeModalWithEDit(): void {
    this.modalSrv.hasBtnEdit$.emit(false);
    this.watchData();
  }

  public activeModalWithWatch(): void {
    this.modalSrv.hasBtnEdit$.emit(true);
    this.watchData();
  }

  private watchData(): void {
    this.viajeTransfermSrv.viajeTransfer$.emit(this.viaje);
    this.modalSrv.activatedModal$.emit(true);
  }
}
