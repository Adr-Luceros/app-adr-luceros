import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { CardLineViajeComponent } from './components/card-line-viaje/card-line-viaje.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { FormViajeModule } from './components/form-viaje/form-viaje.module';


@NgModule({
  declarations: [
    ViajesComponent,
    EncabezadoComponent,
    CardLineViajeComponent,
  ],
  imports: [
    LoadingComponent,
    CommonModule,
    ViajesRoutingModule,
    ModalComponent,
    FormViajeModule
  ]
})
export class ViajesModule { }
