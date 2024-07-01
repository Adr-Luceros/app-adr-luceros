import { Component, Input } from '@angular/core';
import { EntregaExcel } from 'src/app/core/index.model.entity';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css', '../form-style-components.css']
})
export class TiendasComponent {
  @Input() isDisable: boolean = true;
  @Input() entregas: EntregaExcel[] = [];

  public stringTime(hora: string | null): string {
    if (hora == null) {
      return '';
    }
    return hora.split('T')[0]
  }
}
