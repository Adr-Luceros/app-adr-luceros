import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaMantenerRoutingModule } from './tienda-mantener-routing.module';
import { TiendaMantenerComponent } from './tienda-mantener.component';
import { NuevotiendaComponent } from './nuevotienda/nuevotienda.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterTiendaPipe } from 'src/app/core/pipe/filter-tienda.pipe';


@NgModule({
  declarations: [
    TiendaMantenerComponent,
    NuevotiendaComponent,
    FilterTiendaPipe
  ],
  imports: [
    CommonModule,
    TiendaMantenerRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TiendaMantenerModule { }
