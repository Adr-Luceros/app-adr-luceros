import { Component, Input } from '@angular/core';
import { CamionExcel } from 'src/app/core/index.model.entity';

@Component({
  selector: 'app-viajecargado',
  templateUrl: './viajecargado.component.html',
  styleUrls: ['./viajecargado.component.css', '../form-style-components.css']
})
export class ViajecargadoComponent {
  @Input() isDisable: boolean = true;
  @Input() camion: CamionExcel = new CamionExcel();
  @Input() almacen: string = 'Rosales';
  @Input() dia: string | null = new Date().toISOString().split('T')[0];
}
