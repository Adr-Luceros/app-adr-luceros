import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateString, orderHoursString } from 'src/app/core/index.function';
import { DiarioService } from 'src/app/core/index.service.https';
import { Diario } from 'src/app/core/index.interface';
import { ModalService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit, OnDestroy{
  
  
  clientsCurrently: Diario[] = [];
  clientsDefeated: Diario[] = [];
  activateModal: boolean = false;
  
  diarioSubcription: Subscription = new Subscription();
  modalSubcription: Subscription = new Subscription();

  constructor(
    private diarioSrv: DiarioService,
    private modalSrv: ModalService
  ){}

  ngOnInit() {
    const dateCurrently: string = calculateDateString(new Date);
    this.diarioSubcription = this.diarioSrv.getDiario().subscribe(clients => this.OrganizatedClients(dateCurrently, clients))
    this.modalSubcription = this.modalSrv.activatedModal$.subscribe(res => this.activateModal = res);
  }

  ngOnDestroy(): void {
    this.diarioSubcription.unsubscribe();
    this.modalSubcription.unsubscribe();
  }

  private OrganizatedClients(dateCurrently: string, clients: Diario[]): void {
    this.clientsCurrently = clients.filter(client => client.date == dateCurrently)
      .sort((a, b) => orderHoursString(a.hour_init,b.hour_init));

    this.clientsDefeated = clients.filter(client => client.date < dateCurrently && !client.done)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
 
}
