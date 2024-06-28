import { ViajeService } from 'src/app/core/index.service.https';
import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { ViajeExcel } from 'src/app/core/index.model.entity';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('startDate') inputDateInit!: ElementRef;
  @ViewChild('endDate') inputDateEnd!: ElementRef;
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() getListViaje: EventEmitter<ViajeExcel[]> = new EventEmitter<ViajeExcel[]>();
  viajeSubs: Subscription = new Subscription()

  constructor(
    private viajeSrv: ViajeService,
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.viajeSubs = this.viajeSrv.getViajes().subscribe(
      res => {
        this.getListViaje.emit(res);
        this.isLoading.emit(false);
      },
      err => this.isLoading.emit(false)
    );
  }

  ngAfterViewInit(): void {
    this.inputDateInit.nativeElement.value = new Date().toISOString().split('T')[0]
    this.inputDateEnd.nativeElement.value = new Date().toISOString().split('T')[0]
  }

  ngOnDestroy(): void {
    this.viajeSubs.unsubscribe()
  }

  public onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files!.length > 0 && files != null) {
      this.isLoading.emit(true)
      this.viajeSubs = this.viajeSrv.transferExcel(files[0]).subscribe(
        res => {
          this.isLoading.emit(false);
          this.notifySrv.addNotification({
            status: 'success',
            message: res.mensaje,
          });
        },
        err => {
          this.isLoading.emit(false);
          this.notifySrv.addNotification({
            status: 'error',
            message: err.mensaje,
          });
        }
      );
    }
  }

  public filtrarPorRango(): void {
    let fechaInicio: string = this.inputDateInit.nativeElement.value;
    let fechaFin: string = this.inputDateEnd.nativeElement.value;
    this.viajeSrv.getViajesPorRango(fechaInicio, fechaFin).subscribe(
      res => {
        this.getListViaje.emit(res);
        this.isLoading.emit(false);
      },
      err => this.isLoading.emit(false)
    )
  }

}
