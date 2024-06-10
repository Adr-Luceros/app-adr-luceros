import { Component, HostListener, Input, OnInit } from '@angular/core';
import { calculateDateString, hoursCurrently } from 'src/app/core/index.function';
import { Diario } from 'src/app/core/index.interface';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-card-line-appointment-information',
  templateUrl: './card-line-appointment-information.component.html',
  styleUrls: ['./card-line-appointment-information.component.css']
})
export class CardLineAppointmentInformationComponent implements OnInit {
  @Input()client!: Diario;
  @Input()onlyDate: boolean = false;
  statusIcon: number = 1; /* 0: pending, 1: done, 2: defeated */
  isLargeScreen = window.innerWidth > 768;

  constructor(
    private modalSrv: ModalService,
  ) {}

  ngOnInit() {
    const { hour_end, done } = this.client;
    const dateCurrently: string = calculateDateString(new Date);

    if(done) {
      this.statusIcon = 1;
    } else {
      const defeated: boolean = hoursCurrently() > hour_end || dateCurrently > this.client.date;
      this.statusIcon = defeated ? 2 : 0;
    }

  }

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
