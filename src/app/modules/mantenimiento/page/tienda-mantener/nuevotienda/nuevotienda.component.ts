import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Tienda } from 'src/app/core/index.model.entity';
import { TiendaService } from 'src/app/core/index.service.https';

@Component({
  selector: 'app-nuevotienda',
  templateUrl: './nuevotienda.component.html',
  styleUrls: ['./nuevotienda.component.css']
})
export class NuevotiendaComponent {
  nuevoTienda: Tienda;
  esEditar: boolean;

  constructor(
    private tiendaSrv: TiendaService,
    private dialogRef: MatDialogRef<NuevotiendaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esEditar = data.esEditar;
    this.nuevoTienda = data.esEditar ? data.tienda : {
      tienda_id: null,
      destinatario: '',
      direccion: '',
      distrito: '',
      nombreTienda: '',
      psEx: '',
      horaFin: '',
      horaInicio: '',
      contacto: '',
    };
  }

  guardartienda(): void {
    this.nuevoTienda.horaFin = this.nuevoTienda.horaFin === '' ? null : this.nuevoTienda.horaFin + ':00';
    this.nuevoTienda.horaInicio = this.nuevoTienda.horaInicio === '' ? null : this.nuevoTienda.horaInicio + ':00';

    if (this.esEditar) {
      this.tiendaSrv.editarTienda(this.nuevoTienda.tienda_id!, this.nuevoTienda).subscribe(
        response => this.dialogRef.close(true),
        error => console.error('Error al actualizar el tienda', error)
      );
    } else {
      this.tiendaSrv.guardarTienda(this.nuevoTienda).subscribe(
        response => this.dialogRef.close(true),
        error => console.error('Error al guardar el tienda', error)
      );
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
