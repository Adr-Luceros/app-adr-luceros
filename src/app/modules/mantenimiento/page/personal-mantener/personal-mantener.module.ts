import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalMantenerRoutingModule } from './personal-mantener-routing.module';
import { PersonalMantenerComponent } from './personal-mantener.component';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import{ MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    PersonalMantenerComponent,
    NuevoPersonalComponent
  ],
  imports: [ 
    PersonalMantenerRoutingModule,
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
export class PersonalMantenerModule { }
