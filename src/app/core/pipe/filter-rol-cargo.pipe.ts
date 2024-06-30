import { Pipe, PipeTransform } from '@angular/core';
import { RolCargo } from '../index.model.entity';

@Pipe({
  name: 'filterRolCargo'
})
export class FilterRolCargoPipe implements PipeTransform {

  transform(rolCargos: RolCargo[], searchText: string): RolCargo[] {
    if (!rolCargos) {
      return [];
    }
    if (!searchText) {
      return rolCargos;
    }

    searchText = searchText.toLowerCase();

    return rolCargos.filter(rol => {
      return (
        (rol.nombre && rol.nombre.toLowerCase().includes(searchText))
      );
    });
  }

}
