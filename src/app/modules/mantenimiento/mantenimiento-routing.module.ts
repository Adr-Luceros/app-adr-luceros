import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento.component';

const routes: Routes = [
  {
    path: '',
    title: 'Mantenimiento',
    component: MantenimientoComponent,
    children: [
      {
        path: 'personal',
        loadChildren: () => import('./page/personal-mantener/personal-mantener.module').then(m => m.PersonalMantenerModule)
      },
      {
        path: 'rol-cargo',
        loadChildren: () => import('./page/rol-cargo-mantener/rol-cargo-mantener.module').then(m => m.RolCargoMantenerModule)
      },
      {
        path: 'camion',
        loadChildren: () => import('./page/camion-mantener/camion-mantener.module').then(m => m.CamionMantenerModule)
      },
      {
        path: 'tienda',
        loadChildren: () => import('./page/tienda-mantener/tienda-mantener.module').then(m => m.TiendaMantenerModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenimientoRoutingModule { }
