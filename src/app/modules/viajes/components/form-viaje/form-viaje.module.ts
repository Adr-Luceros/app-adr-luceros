import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormViajeComponent } from './form-viaje.component';
import { PersonalComponent } from './personal/personal.component';
import { PickingsComponent } from './pickings/pickings.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ViajecargadoComponent } from './viajecargado/viajecargado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormViajeComponent,
    PersonalComponent,
    PickingsComponent,
    TiendasComponent,
    ViajecargadoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormViajeComponent
  ]
})
export class FormViajeModule { }
