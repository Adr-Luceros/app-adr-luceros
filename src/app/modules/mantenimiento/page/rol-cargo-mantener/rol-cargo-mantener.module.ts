import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolCargoMantenerRoutingModule } from './rol-cargo-mantener-routing.module';
import { NuevorolcargoComponent } from './nuevorolcargo/nuevorolcargo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterRolCargoPipe } from 'src/app/core/pipe/filter-rol-cargo.pipe';
import { RolCargoMantenerComponent } from './rol-cargo-mantener.component';

@NgModule({
  declarations: [
    NuevorolcargoComponent,
    RolCargoMantenerComponent,
    FilterRolCargoPipe
  ],
  imports: [
    RolCargoMantenerRoutingModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RolCargoMantenerModule { }
