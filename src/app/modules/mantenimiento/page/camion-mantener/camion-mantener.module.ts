import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { CamionMantenerRoutingModule } from './camion-mantener-routing.module';
import { NuevocamionComponent } from './nuevocamion/nuevocamion.component';
import { CamionMantenerComponent } from './camion-mantener.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { MatDialogModule } from '@angular/material/dialog';
import{ MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CamionMantenerComponent,
    NuevocamionComponent
  ],
  imports: [
    CommonModule,
    CamionMantenerRoutingModule,
    MatDialogModule,
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
export class CamionMantenerModule { }
