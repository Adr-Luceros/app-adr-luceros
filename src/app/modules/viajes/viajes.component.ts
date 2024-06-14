import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateString } from 'src/app/core/index.function';
import { Viaje } from 'src/app/core/index.model.frontend';
import { ViajeService } from 'src/app/core/index.service.https';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy {
  activateModal: boolean = false;
  listViajes: Viaje[] = [];
  modalSubcription: Subscription = new Subscription();
  viajeSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private viajeSrv: ViajeService
  ) { }

  ngOnInit() {
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);
    this.viajeSubcription = this.viajeSrv.getViajes().subscribe(res => this.listViajes = res);
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
    this.viajeSubcription.unsubscribe();
  }

}
