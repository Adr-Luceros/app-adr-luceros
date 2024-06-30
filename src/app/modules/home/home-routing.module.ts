import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'viajes',
        loadChildren: () => import('../viajes/viajes.module').then(m => m.ViajesModule),
      },
      {
        path: 'mantenimiento',
        loadChildren: () => import('../mantenimiento/mantenimiento.module').then(m => m.MantenimientoModule)
      },

      {
        path: '**',
        redirectTo: 'viajes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
