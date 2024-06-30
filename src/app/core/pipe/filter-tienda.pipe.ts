import { Pipe, PipeTransform } from '@angular/core';
import { Tienda } from '../index.model.entity';

@Pipe({
  name: 'filterTienda'
})
export class FilterTiendaPipe implements PipeTransform {

  transform(tiendas: Tienda[], searchText: string): Tienda[] {
    if (!tiendas) {
      return [];
    }
    if (!searchText) {
      return tiendas;
    }

    searchText = searchText.toLowerCase();

    return tiendas.filter(tienda => {
      return (
        (tienda.contacto && tienda.contacto.toLowerCase().includes(searchText)) ||
        (tienda.destinatario && tienda.destinatario.toLowerCase().includes(searchText)) ||
        (tienda.direccion && tienda.direccion.toLowerCase().includes(searchText)) ||
        (tienda.distrito && tienda.distrito.toLowerCase().includes(searchText)) ||
        (tienda.horaFin && tienda.horaFin.toLowerCase().includes(searchText)) ||
        (tienda.horaInicio && tienda.horaInicio.toLowerCase().includes(searchText)) ||
        (tienda.nombreTienda && tienda.nombreTienda.toLowerCase().includes(searchText)) ||
        (tienda.psEx && tienda.psEx.toLowerCase().includes(searchText))
      );
    });
  }

}
