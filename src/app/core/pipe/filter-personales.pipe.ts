import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../index.model.entity';

@Pipe({
  name: 'filterPersonales'
})
export class FilterPersonalesPipe implements PipeTransform {

  transform(personas: Persona[], searchText: string): Persona[] {
    if (!personas) {
      return [];
    }
    if (!searchText) {
      return personas;
    }

    searchText = searchText.toLowerCase();

    return personas.filter(persona => {
      return (
        (persona.nombre && persona.nombre.toLowerCase().includes(searchText)) ||
        (persona.nroDocumento && persona.nroDocumento.toLowerCase().includes(searchText)) ||
        (persona.telefono && persona.telefono.toLowerCase().includes(searchText)) ||
        (persona.tipoDocumento && persona.tipoDocumento.toLowerCase().includes(searchText))
      );
    });
  }

}
