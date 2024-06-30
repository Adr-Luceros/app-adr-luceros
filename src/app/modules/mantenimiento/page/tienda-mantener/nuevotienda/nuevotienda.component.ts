import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tienda } from 'src/app/core/index.model.entity';
import { TiendaService } from 'src/app/core/index.service.https';
import { DialogoTienda } from '../tienda-mantener.component';
import { NotifyService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-nuevotienda',
  templateUrl: './nuevotienda.component.html',
  styleUrls: ['./nuevotienda.component.css']
})
export class NuevotiendaComponent {
  nuevoTienda: Tienda;
  esEditar: boolean;
  @ViewChild('HoraFin') input!: ElementRef

  constructor(
    private tiendaSrv: TiendaService,
    private notifySrv: NotifyService,
    private dialogRef: MatDialogRef<NuevotiendaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoTienda
  ) {
    this.esEditar = data.esEditar;
    this.nuevoTienda = data.tienda ?? new Tienda();
  }

  public guardarCambios(): void {
    let tienda: Tienda = this.nuevoTienda;
    if (tienda.horaInicio?.length === 5) {
      tienda.horaInicio = tienda.horaInicio + ':00';
    }

    if (tienda.horaFin?.length === 5) {
      tienda.horaFin = tienda.horaFin + ':00';
    }

    if (this.esEditar) {
      this.editarTienda(tienda);
    } else {
      this.guardarTienda(tienda);
    }
  }

  private guardarTienda(tienda: Tienda): void {
    this.tiendaSrv.guardarTienda(tienda).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Tienda guardada exitosamente'
        });
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al guardar a la tienda'
      })
    );
  }

  private editarTienda(tienda: Tienda): void {
    this.tiendaSrv.editarTienda(tienda.tienda_id!, tienda).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Tienda editada exitosamente'
        });
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al editar a la tienda'
      })
    );
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
