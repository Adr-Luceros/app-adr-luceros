import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { RolCargoMantenerRoutingModule } from './rol-cargo-mantener-routing.module';
import { NuevorolcargoComponent } from './nuevorolcargo/nuevorolcargo.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    NuevorolcargoComponent,
  ],
  imports: [
    RolCargoMantenerRoutingModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatDialogModule,
    NgIf,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RolCargoMantenerModule { }
