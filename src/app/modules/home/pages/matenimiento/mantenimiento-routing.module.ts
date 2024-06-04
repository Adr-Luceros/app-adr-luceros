import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatenimientoComponent } from './matenimiento.component';

const routes: Routes = [
  {
    path: '',
    title: 'Mantenimiento',
    component: MatenimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
