import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    HomeComponent,    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarComponent
  ]
})
export class HomeModule { }
