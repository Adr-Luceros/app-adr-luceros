import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaMantenerComponent } from './tienda-mantener.component';

const routes: Routes = [
  {
    path: '',
    component: TiendaMantenerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaMantenerRoutingModule { }
