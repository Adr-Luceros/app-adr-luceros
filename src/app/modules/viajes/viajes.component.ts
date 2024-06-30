import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViajeExcel } from 'src/app/core/index.model.entity';
import { ModalService } from 'src/app/core/index.service.triggers';

interface ViajeGroup {
  dia: string;
  value: ViajeExcel[];
}

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  activateModal: boolean = false;
  isActiveEditable: boolean = false;
  searchText: string = '';
  groupListaViajes: ViajeGroup[] | null = null;
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
    if (list === null || list.length === 0) {
      this.groupListaViajes = null;
      return
    }
    this.groupListaViajes = Object.values(
      list.reduce((acc, salida) => {
        const fecha = salida.fechaDeSalida == null ? new Date().toISOString().split('T')[0] : salida.fechaDeSalida.split('T')[0];
        if (!acc[fecha]) {
          acc[fecha] = { dia: fecha, value: [] };
        }
        acc[fecha].value.push(salida);
        return acc;
      }, {} as { [key: string]: ViajeGroup })
    );
  }

  public activeEditable(active: boolean): void {
    this.isActiveEditable = active;
  }

  public activeLoading(active: boolean): void {
    this.isLoading = active;
  }

  public search(search: string): void {
    this.searchText = search;
  }

}
