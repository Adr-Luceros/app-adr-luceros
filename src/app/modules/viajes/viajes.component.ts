import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViajeExcel } from 'src/app/core/index.model.frontend';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy {
  // modal = ViewChild(ModalComponent);
  isLoading: boolean = false;
  activateModal: boolean = false;
  isActiveEditable: boolean = false;
  listViajes: ViajeExcel[] = [];
  modalSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);

  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
  }

  public getListViaje(list: ViajeExcel[]): void {
    this.listViajes = list;
  }

  public activeEditable(active: boolean): void {
    this.isActiveEditable = active;
  }

  public activeLoading(active: boolean): void {
    this.isLoading = active;
  }

}
