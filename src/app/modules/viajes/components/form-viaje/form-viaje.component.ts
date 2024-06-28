import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViajeExcel } from 'src/app/core/index.model.frontend';
import { ViajeTransferService } from 'src/app/core/index.service.transferm';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.component.html',
  styleUrls: ['./form-viaje.component.css']
})
export class FormViajeComponent implements OnInit, OnDestroy {
  isActiveActionSave: boolean = true;
  viajeGet: ViajeExcel = new ViajeExcel();

  modalSubcription: Subscription = new Subscription();
  viajeTransfermSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private viajeTransfermSrv: ViajeTransferService
  ) { }

  ngOnInit(): void {
    this.modalSubcription = this.modalSrv.hasBtnEdit$.subscribe(isEditable => this.isActiveActionSave = !isEditable);
    this.viajeTransfermSubcription = this.viajeTransfermSrv.viajeTransfer$.subscribe(viaje => this.viajeGet = viaje);
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
    this.viajeTransfermSubcription.unsubscribe();
  }
}