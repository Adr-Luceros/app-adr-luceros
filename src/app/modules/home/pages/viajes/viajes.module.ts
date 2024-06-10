import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesRoutingModule } from './viajes-routing.module';

import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ViajesComponent } from './viajes.component';
import { ViajecargadoComponent } from './viajecargado/viajecargado.component';
import { PersonalComponent } from './personal/personal.component';
import { PickingsComponent } from './pickings/pickings.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { CardLineAppointmentInformationComponent } from './component/card-line-appointment-information/card-line-appointment-information.component';


@NgModule({
  declarations: [ 
    ViajesComponent,
    CardLineAppointmentInformationComponent,
    ViajecargadoComponent,
    PersonalComponent,
    PickingsComponent,
    TiendasComponent    
    
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    ModalComponent
   
  ]
})
export class ViajesModule { }
