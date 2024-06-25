import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viajecargado',
  templateUrl: './viajecargado.component.html',
  styleUrls: ['./viajecargado.component.css', '../form-style-components.css']
})
export class ViajecargadoComponent {
  @Input() isDisable: boolean = true;
  placa: number = 1;
  almacen: number = 1;
  dia: string = new Date().toISOString().split('T')[0]
}
