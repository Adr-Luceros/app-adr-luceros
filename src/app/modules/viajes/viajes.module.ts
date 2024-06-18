import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CardLineViajeComponent } from './components/card-line-viaje/card-line-viaje.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PickingsComponent } from './components/pickings/pickings.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { ViajecargadoComponent } from './components/viajecargado/viajecargado.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';


@NgModule({
  declarations: [
    ViajesComponent,
    EncabezadoComponent,
    CardLineViajeComponent,
    PersonalComponent,
    PickingsComponent,
    TiendasComponent,
    ViajecargadoComponent,
  ],
  imports: [
    LoadingComponent,
    CommonModule,
    ViajesRoutingModule,
    ModalComponent
  ]
})
export class ViajesModule { }
