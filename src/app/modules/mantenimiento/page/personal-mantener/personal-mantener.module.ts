import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalMantenerRoutingModule } from './personal-mantener-routing.module';
import { PersonalMantenerComponent } from './personal-mantener.component';


@NgModule({
  declarations: [
    PersonalMantenerComponent
  ],
  imports: [
    CommonModule,
    PersonalMantenerRoutingModule
  ]
})
export class PersonalMantenerModule { }
