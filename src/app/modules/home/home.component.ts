import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiderbarService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activateSidebar: boolean = true;
  sidebarSub: Subscription = new Subscription();

  constructor(
    private SiderbarSrv: SiderbarService
  ){}
  
  ngOnInit(): void {
    this.sidebarSub = this.SiderbarSrv.activatedSidebar$.subscribe(activate => this.activateSidebar = activate);
  }

  ngOnDestroy(): void {
    this.sidebarSub.unsubscribe();
  }
}
