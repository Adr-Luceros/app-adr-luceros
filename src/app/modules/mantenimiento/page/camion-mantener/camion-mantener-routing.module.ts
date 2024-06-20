import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionMantenerComponent } from './camion-mantener.component';

const routes: Routes = [
  {
    path: '',
    component: CamionMantenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamionMantenerRoutingModule { }
