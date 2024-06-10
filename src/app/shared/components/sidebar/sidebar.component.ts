import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiderbarService } from 'src/app/core/index.service.triggers';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class SidebarComponent {
  @ViewChild('menu') menuElement!: ElementRef;
  @ViewChild('checkboxMenu') checkboxMenuElement!: ElementRef;
  isActivateMenu = false;
  isActivateSidebar: boolean = true;

  constructor(
    private siderbarSrv: SiderbarService,
    // private eRef: ElementRef
  ) { }

  @HostListener('window:resize', ['$event'])
  private onResize(event$: any) {
    if (event$.target.innerWidth < 768 && this.isActivateSidebar) {
      this.reactiveSidebar();
    }
  }

  @HostListener('window:click', ['$event'])
  handleClickOutside(event: Event) {
    let isNotElementOfMenu = !this.menuElement.nativeElement.contains(event.target) && !this.checkboxMenuElement.nativeElement.contains(event.target)
    if (isNotElementOfMenu && this.isActivateMenu) {
      this.isActivateMenu = false;
    }
  }

  public reactiveSidebar() {
    this.isActivateSidebar = !this.isActivateSidebar;
    this.siderbarSrv.activatedSidebar$.emit(this.isActivateSidebar);
  }
}
