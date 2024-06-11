import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CardLineViajeComponent } from './components/card-line-viaje/card-line-viaje.component';


@NgModule({
  declarations: [
    ViajesComponent,
    EncabezadoComponent,
    CardLineViajeComponent
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule
  ]
})
export class ViajesModule { }
