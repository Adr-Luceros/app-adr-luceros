import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-card-line-viaje',
  templateUrl: './card-line-viaje.component.html',
  styleUrls: ['./card-line-viaje.component.css']
})
export class CardLineViajeComponent {

  constructor(
    private modalSrv: ModalService,
  ) { }

  public watchData(): void {
    this.modalSrv.activatedModal$.emit(true);
  }
}
