import { Pipe, PipeTransform } from '@angular/core';
import { Camion } from '../index.model.entity';

@Pipe({
  name: 'filterCamiones'
})
export class FilterCamionesPipe implements PipeTransform {

  transform(camiones: Camion[], searchText: string): Camion[] {
    if (!camiones) {
      return [];
    }
    if (!searchText) {
      return camiones;
    }

    searchText = searchText.toLowerCase();

    return camiones.filter(camion => {
      return (
        (camion.marca && camion.marca.toLowerCase().includes(searchText)) ||
        (camion.placa && camion.placa.toLowerCase().includes(searchText)) ||
        (camion.tc && camion.tc.toLowerCase().includes(searchText)) ||
        (camion.soat && camion.soat.toLowerCase().includes(searchText)) ||
        (camion.capacidad && camion.capacidad.volumen && camion.capacidad.volumen.toString().includes(searchText))
      );
    });
  }
}
