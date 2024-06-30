import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamionMantenerRoutingModule } from './camion-mantener-routing.module';
import { NuevocamionComponent } from './nuevocamion/nuevocamion.component';
import { CamionMantenerComponent } from './camion-mantener.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterCamionesPipe } from '../../../../core/pipe/filter-camiones.pipe';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';


@NgModule({
  declarations: [
    CamionMantenerComponent,
    NuevocamionComponent,
    FilterCamionesPipe
  ],
  imports: [
    CommonModule,
    CamionMantenerRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent
  ]
})
export class CamionMantenerModule { }
