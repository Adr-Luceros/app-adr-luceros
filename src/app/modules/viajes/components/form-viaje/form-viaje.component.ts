import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-form-viaje',
  templateUrl: './form-viaje.component.html',
  styleUrls: ['./form-viaje.component.css']
})
export class FormViajeComponent implements AfterViewInit, OnDestroy {
  isActiveActionSave: boolean = true;
  modalSubcription: Subscription = new Subscription();


  constructor(
    private modalSrv: ModalService
  ) {
    console.log("constructor")
    // No jala el boton de modal, solucionar esa problematica
    this.modalSubcription = this.modalSrv.hasBtnEdit$.subscribe(
      isEditable => {
        console.log("constructor")
        this.isActiveActionSave = !isEditable;
      },
      err => {
        console.log(err)
      }
    );
  }

  ngAfterViewInit(): void {
    console.log("afterview")
    this.modalSubcription = this.modalSrv.hasBtnEdit$.subscribe(
      isEditable => {
        console.log("afterview")
        this.isActiveActionSave = !isEditable;
        console.log(isEditable);
      },
      err => {
        console.log(err)
      }
    );
  }

  ngOnDestroy(): void {
    this.modalSubcription.unsubscribe();
  }
}
