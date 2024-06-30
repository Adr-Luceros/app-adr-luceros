import { Component } from '@angular/core';
import { Router } from '@angular/router';

export type NameEntity =
  'Personal' | 'Rol cargo' | 'Camion' | 'Tienda' |
  'Picking' | 'Ruta' | 'Estado picking' | 'Estado entrega' |
  'Tipo flete' | 'Capacidad'

export interface Entity {
  name: NameEntity;
  count: number;
  href?: string;
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
      count: 0,
      href: 'personal',
    },
    {
      name: 'Rol cargo',
      count: 0,
      href: 'rol-cargo',
    },
    {
      name: 'Camion',
      count: 0,
      href: 'camion',
    },
    {
      name: 'Capacidad',
      count: 0,
    },
    {
      name: 'Tienda',
      count: 0,
      href: 'tienda',
    },
    {
      name: 'Estado entrega',
      count: 0,
    },
    {
      name: 'Tipo flete',
      count: 0,
    },
    {
      name: 'Picking',
      count: 0,
    },
    {
      name: 'Estado picking',
      count: 0,
    },
    {
      name: 'Ruta',
      count: 0,
    }
  ]

  constructor(
    private router: Router
  ) {
    let urlCurrect = this.router.url.split('/').pop();

    for (let entity of this.entities) {
      if (entity.href == urlCurrect) this.nombreEntidad = entity.name
      this.recopilationCountEntities(entity);
    }
  }

  public goToMantenimiento(): void {
    this.router.navigate(['/home/mantenimiento'])
    for (let entity of this.entities) {
      this.recopilationCountEntities(entity);
    }
  }

  private recopilationCountEntities(entity: Entity): void {
    if (entity.href) {
      const getLocalStorage = localStorage.getItem(entity.name) ?? null;
      const count: number = getLocalStorage !== null ? parseInt(getLocalStorage) : 0;
      entity.count = count;
    }
  }

}
