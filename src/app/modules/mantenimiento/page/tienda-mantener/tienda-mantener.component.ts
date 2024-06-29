import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tienda } from 'src/app/core/index.model.entity';
import { NuevotiendaComponent } from './nuevotienda/nuevotienda.component';
import { TiendaService } from 'src/app/core/index.service.https';

@Component({
  selector: 'app-tienda-mantener',
  templateUrl: './tienda-mantener.component.html',
  styleUrls: ['./tienda-mantener.component.css']
})
export class TiendaMantenerComponent {
  tiendas: Tienda[] = [];

  constructor(
    private tiendaSrv: TiendaService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listarTiendasSrv();
  }

  private listarTiendasSrv(): void {
    this.tiendaSrv.listarTienda().subscribe(
      data => this.tiendas = data,
      error => console.error('Error al listar el personal:', error)
    );
  }

  deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar esta tienda?');
    if (confirmar && id != null) {
      this.tiendaSrv.eliminarTienda(id).subscribe(
        () => this.listarTiendasSrv(),
        err => console.error('Error al eliminar el personal', err)
      );
    }
  }

  abrirModalNuevoRolCargo(): void {
    const dialogRef = this.dialog.open(NuevotiendaComponent, {
      width: '500px',
      data: { esEditar: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarTiendasSrv();
      }
    });
  }

  abrirModalEditarRolCargo(tienda: Tienda): void {
    const dialogRef = this.dialog.open(NuevotiendaComponent, {
      width: '500px',
      data: { esEditar: true, tienda }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarTiendasSrv();
      }
    });
  }
}
