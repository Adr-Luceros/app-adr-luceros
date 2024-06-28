import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { MantenimientoComponent } from './mantenimiento.component';
import { RolCargoMantenerComponent } from './page/rol-cargo-mantener/rol-cargo-mantener.component';
import { CamionMantenerComponent } from './page/camion-mantener/camion-mantener.component';


@NgModule({
  declarations: [
    MantenimientoComponent,
    RolCargoMantenerComponent,
   
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule { }
