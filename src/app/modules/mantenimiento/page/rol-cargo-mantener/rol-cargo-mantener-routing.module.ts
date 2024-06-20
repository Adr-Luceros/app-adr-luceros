import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolCargoMantenerComponent } from './rol-cargo-mantener.component';

const routes: Routes = [
  {
    path: '',
    component: RolCargoMantenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolCargoMantenerRoutingModule { }
