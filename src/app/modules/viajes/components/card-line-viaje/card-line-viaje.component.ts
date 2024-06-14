import { Component, Input } from '@angular/core';
import { Viaje } from 'src/app/core/index.model.frontend';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-card-line-viaje',
  templateUrl: './card-line-viaje.component.html',
  styleUrls: ['./card-line-viaje.component.css']
})
export class CardLineViajeComponent {

  @Input() public viaje: Viaje = new Viaje();

  constructor(
    private modalSrv: ModalService,
  ) { }

  public watchData(): void {
    this.modalSrv.activatedModal$.emit(true);
  }
}
