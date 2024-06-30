import { ViajeExcel } from './../model/Entity/Excel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGestionViaje'
})
export class FilterGestionViajePipe implements PipeTransform {

  transform(viajesExcel: ViajeExcel[], searchText: string): ViajeExcel[] {
    if (!viajesExcel) {
      return [];
    }
    if (!searchText) {
      return viajesExcel;
    }

    searchText = searchText.toLowerCase();

    return viajesExcel.filter(viaje => {
      const matchesAlmacen = viaje.almacen && viaje.almacen.toLowerCase().includes(searchText);
      const matchesFechaDeSalida = viaje.fechaDeSalida && viaje.fechaDeSalida.toLowerCase().includes(searchText);
      const matchesCamionMarca = viaje.camion && viaje.camion.marca && viaje.camion.marca.toLowerCase().includes(searchText);
      const matchesCamionPlaca = viaje.camion && viaje.camion.placa && viaje.camion.placa.toLowerCase().includes(searchText);

      const matchesFletes = viaje.fletes && viaje.fletes.some(flete =>
        (flete.picking && flete.picking.nroPicking && flete.picking.nroPicking.toString().includes(searchText)) ||
        (flete.tipo && flete.tipo.nombreTipo && flete.tipo.nombreTipo.toLowerCase().includes(searchText))
      );

      const matchesEntregas = viaje.entregas && viaje.entregas.some(entrega =>
        (entrega.tienda && entrega.tienda.nombreTienda && entrega.tienda.nombreTienda.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.distrito && entrega.tienda.distrito.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.direccion && entrega.tienda.direccion.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.psEx && entrega.tienda.psEx.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.destinatario && entrega.tienda.destinatario.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.horaInicio && entrega.tienda.horaInicio.toLowerCase().includes(searchText)) ||
        (entrega.tienda && entrega.tienda.horaFin && entrega.tienda.horaFin.toLowerCase().includes(searchText))
      );

      return matchesAlmacen || matchesFechaDeSalida || matchesCamionMarca || matchesCamionPlaca || matchesFletes || matchesEntregas;
    });
  }

}
