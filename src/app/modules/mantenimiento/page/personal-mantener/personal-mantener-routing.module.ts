import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalMantenerComponent } from './personal-mantener.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalMantenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalMantenerRoutingModule { }
