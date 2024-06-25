import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Viaje } from 'src/app/core/index.model.frontend';
import { ViajeService } from 'src/app/core/index.service.https';
import { ModalService } from 'src/app/core/index.service.triggers';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy {
  modal = ViewChild(ModalComponent);
  activateModal: boolean = false;
  isLoading: boolean = false;
  listViajes: Viaje[] = [];
  modalSubcription: Subscription = new Subscription();
  viajeSubcription: Subscription = new Subscription();
  isActiveEditable: boolean = false;

  constructor(
    private modalSrv: ModalService,
    private viajeSrv: ViajeService
  ) { }

  ngOnInit() {
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);
    this.isLoading = true;
    this.viajeSubcription = this.viajeSrv.getViajes().subscribe(
      res => {
        this.listViajes = res
        this.isLoading = false;
      },
      err => this.isLoading = false
    );
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
    this.viajeSubcription.unsubscribe();
  }

  public activeEditable(active: boolean): void {
    this.isActiveEditable = active;
  }

}
