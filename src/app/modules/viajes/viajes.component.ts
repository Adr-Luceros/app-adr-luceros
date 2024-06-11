import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateString } from 'src/app/core/index.function';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy {
  activateModal: boolean = false;
  modalSubcription: Subscription = new Subscription();
  listViajes: any[] = []

  constructor(
    private modalSrv: ModalService
  ) { }

  ngOnInit() {
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
  }

}
