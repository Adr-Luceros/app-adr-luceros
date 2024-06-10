import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateString } from 'src/app/core/index.function';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy{
  activateModal: boolean = false;
  
  diarioSubcription: Subscription = new Subscription();
  modalSubcription: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService
  ){}

  ngOnInit() {
    const dateCurrently: string = calculateDateString(new Date);
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);
  }

  ngOnDestroy(): void {
    this.diarioSubcription.unsubscribe();
    this.modalSubcription.unsubscribe();
  }
 
}
