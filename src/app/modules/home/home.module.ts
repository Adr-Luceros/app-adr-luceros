import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ViajesComponent } from './pages/viajes/viajes.component';


@NgModule({
  declarations: [
    HomeComponent,   
   
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent,
   
  ]
})
export class HomeModule { }
