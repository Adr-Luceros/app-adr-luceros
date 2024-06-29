import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Entity {
  name: string;
  href?: string;
  description: string;
}

@Component({
  selector: 'app-matenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {
  nombreEntidad: string = '';
  entities: Entity[] = [
    {
      name: 'Personal',
      href: 'personal',
      description: 'Mantenimiento de todos los personales que cuenta la empresa para las entregas'
    },
    {
      name: 'Rol cargo',
      href: 'rol-cargo',
      description: 'Mantenimiento de todos los roles y cargos que tiene la empresa para las entregas'
    },
    {
      name: 'Camion',
      href: 'camion',
      description: 'Mantenimiento de todos los camiones que tiene la empresa para las entregas'
    },
    {
      name: 'Capacidad',
      description: 'Mantenimiento de las capacidades de los camiones que tiene la empresa para las entregas'
    },
    {
      name: 'Tienda',
      href: 'tienda',
      description: 'Mantenimiento de las tiendas que tiene la empresa para las entregas'
    },
    {
      name: 'Estado entrega',
      description: 'Mantenimiento de los estados de las entregas'
    },
    {
      name: 'Tipo flete',
      description: 'Mantenimiento de los tipos de fletes'
    },
    {
      name: 'Picking',
      description: 'Mantenimiento de los picking'
    },
    {
      name: 'Estado picking',
      description: 'Mantenimiento de los estados de picking'
    },
    {
      name: 'Ruta',
      description: 'Mantenimiento de las rutas'
    }
  ]

  constructor(
    private router: Router
  ) {
    let urlCurrect = this.router.url.split('/').pop();

    for (let entity of this.entities) {
      if (entity.href == urlCurrect) this.nombreEntidad = entity.name
    }
  }

  public goToMantenimiento(): void {
    this.router.navigate(['/home/mantenimiento'])
  }

}
