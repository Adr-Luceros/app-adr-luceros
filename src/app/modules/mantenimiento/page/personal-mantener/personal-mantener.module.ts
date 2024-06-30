import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalMantenerRoutingModule } from './personal-mantener-routing.module';
import { PersonalMantenerComponent } from './personal-mantener.component';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterPersonalesPipe } from 'src/app/core/pipe/filter-personales.pipe';
@NgModule({
  declarations: [
    PersonalMantenerComponent,
    NuevoPersonalComponent,
    FilterPersonalesPipe
  ],
  imports: [
    PersonalMantenerRoutingModule,
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonalMantenerModule { }
