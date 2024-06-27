import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.component.html',
  styleUrls: ['./form-viaje.component.css']
})
export class FormViajeComponent implements OnInit, OnDestroy {
  isActiveActionSave: boolean = true;
  modalSubcription: Subscription = new Subscription();


  constructor(
    private modalSrv: ModalService
  ) { }

  ngOnInit(): void {
    this.modalSubcription = this.modalSrv.hasBtnEdit$.subscribe(isEditable => {
      this.isActiveActionSave = !isEditable;
    });
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
  }
}