import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
     
      
      {
        path:'Viajes',
        loadChildren: () => import('./pages/viajes/viajes.module').then(m => m.ViajesModule)
      },
      {
        path:'mantenimiento',
        loadChildren: () => import('./pages/matenimiento/mantenimiento.module').then(m => m.MantenimientoModule)
      },
      {
        path:'reportes',
        loadChildren: () => import('./pages/reportes/reportes.module').then(m => m.ReportesModule)
      },
    
      {
        path: '**',
        redirectTo: 'Viajes',
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
