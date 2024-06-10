import { Component, HostListener, Input } from '@angular/core';
// import { calculateDateString, hoursCurrently } from 'src/app/core/index.function';
// import { Diario } from 'src/app/core/index.interface';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-card-line-appointment-information',
  templateUrl: './card-line-appointment-information.component.html',
  styleUrls: ['./card-line-appointment-information.component.css']
})
export class CardLineAppointmentInformationComponent {
  // @Input()client!: Diario;
  @Input()onlyDate: boolean = false;
  statusIcon: number = 1; /* 0: pending, 1: done, 2: defeated */
  isLargeScreen = window.innerWidth > 768;

  constructor(
    private modalSrv: ModalService,
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isLargeScreen = window.innerWidth < 380;
  }

  public delimiteName(name: string): string {
    const maxLength = 20;
    const truncatedName = name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
    return truncatedName;
  }

  public watchData(): void {
    this.modalSrv.activatedModal$.emit(true);
  }
}
