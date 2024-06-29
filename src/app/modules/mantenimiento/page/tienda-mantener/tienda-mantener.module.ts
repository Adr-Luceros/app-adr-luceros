import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { TiendaMantenerRoutingModule } from './tienda-mantener-routing.module';
import { TiendaMantenerComponent } from './tienda-mantener.component';
import { NuevotiendaComponent } from './nuevotienda/nuevotienda.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TiendaMantenerComponent,
    NuevotiendaComponent
  ],
  imports: [
    CommonModule,
    TiendaMantenerRoutingModule,
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
export class TiendaMantenerModule { }
