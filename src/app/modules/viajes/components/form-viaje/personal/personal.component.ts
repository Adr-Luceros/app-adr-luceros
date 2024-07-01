import { Component, Input } from '@angular/core';
import { CargoExcel, Persona, RolCargo } from 'src/app/core/index.model.entity';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css', '../form-style-components.css']
})
export class PersonalComponent {
  @Input() isDisable: boolean = true;
  @Input() cargos: CargoExcel[] = [];

  public agregarCargos() {
    let persona: Persona = new Persona();

    let rolCargo: RolCargo = new RolCargo();

    this.cargos.push({
      cargo_id: null,
      personal: persona,
      rolCargo: rolCargo
    })
  }
}
