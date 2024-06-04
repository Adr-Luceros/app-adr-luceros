import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SiderbarService } from 'src/app/core/index.service.triggers';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [ CommonModule, HomeRoutingModule ],
})
export class SidebarComponent {
  
  activate: boolean = true;

  constructor(
    private siderbarSrv: SiderbarService
  ){}

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if(event$.target.innerWidth < 768 && this.activate) {
      this.reactiveSidebar();
    }
  }

  public reactiveSidebar(){
    this.activate = !this.activate;
    this.siderbarSrv.activatedSidebar$.emit(this.activate);
  }
}
