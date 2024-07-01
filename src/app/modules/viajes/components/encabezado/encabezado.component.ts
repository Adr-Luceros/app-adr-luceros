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
  buscar: string = '';
  @ViewChild('startDate') inputDateInit!: ElementRef;
  @ViewChild('endDate') inputDateEnd!: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() getListViaje: EventEmitter<ViajeExcel[]> = new EventEmitter<ViajeExcel[]>();
  viajeSubsGetterList: Subscription = new Subscription()
  viajeSubsGetterListRango: Subscription = new Subscription()
  viajeSubsRecopilarExcel: Subscription = new Subscription()

  constructor(
    private viajeSrv: ViajeService,
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.isLoading.emit(true);
    this.listarViajes();
  }

  ngAfterViewInit(): void {
    this.inputDateInit.nativeElement.value = new Date().toISOString().split('T')[0]
    this.inputDateEnd.nativeElement.value = new Date().toISOString().split('T')[0]
  }

  ngOnDestroy(): void {
    if (this.viajeSubsGetterList) this.viajeSubsGetterList.unsubscribe();
    if (this.viajeSubsGetterListRango) this.viajeSubsGetterListRango.unsubscribe();
    if (this.viajeSubsRecopilarExcel) this.viajeSubsRecopilarExcel.unsubscribe();
  }

  private listarViajes() {
    this.viajeSubsGetterList = this.viajeSrv.getViajes().subscribe(
      res => {
        this.isLoading.emit(false);
        this.getListViaje.emit(res);
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Listado exitosamente',
        });
      },
      err => {
        this.isLoading.emit(false);
        this.notifySrv.addNotification({
          status: 'error',
          message: 'Error al listar viajes',
        });
      }
    );
  }

  public onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files!.length > 0 && files != null) {
      this.isLoading.emit(true)
      this.viajeSubsRecopilarExcel = this.viajeSrv.transferExcel(files[0]).subscribe(
        res => {
          this.listarViajes();
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
    this.isLoading.emit(true);
    this.viajeSubsGetterListRango = this.viajeSrv.getViajesPorRango(fechaInicio, fechaFin).subscribe(
      res => {
        this.getListViaje.emit(res);
        this.isLoading.emit(false);
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Listado exitoso',
        });
      },
      err => {
        this.isLoading.emit(false);
        this.notifySrv.addNotification({
          status: 'error',
          message: 'Error del servidor',
        });
      }
    )
  }

  public filtrarPorBusqueda($event: string): void {
    this.search.emit($event);

  }

}
