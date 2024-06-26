import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tienda } from 'src/app/core/index.model.entity';
import { NuevotiendaComponent } from './nuevotienda/nuevotienda.component';
import { TiendaService } from 'src/app/core/index.service.https';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { NameEntity } from '../../mantenimiento.component';

export interface DialogoTienda {
  esEditar: boolean,
  tienda?: Tienda
}

@Component({
  selector: 'app-tienda-mantener',
  templateUrl: './tienda-mantener.component.html',
  styleUrls: ['./tienda-mantener.component.css']
})
export class TiendaMantenerComponent {
  tiendas: Tienda[] = [];
  searchText: string = '';
  isLoading: boolean = false;

  constructor(
    private tiendaSrv: TiendaService,
    private notifySrv: NotifyService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.listarTiendasSrv();
  }

  private listarTiendasSrv(): void {
    this.tiendaSrv.listarTienda().subscribe(
      res => {
        this.tiendas = res;
        const nombreEntidad: NameEntity = 'Tienda'
        localStorage.setItem(nombreEntidad, res.length.toString());
        this.isLoading = false;
      },
      err => {
        this.notifySrv.addNotification({
          status: 'error',
          message: 'Error al listar tiendas'
        })
        this.isLoading = false;
      }
    );
  }

  public deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar esta tienda?');
    if (confirmar && id != null) {
      this.isLoading = true;
      this.tiendaSrv.eliminarTienda(id).subscribe(
        res => {
          this.notifySrv.addNotification({
            status: 'success',
            message: 'Tienda eliminado exitosamente'
          })
          this.listarTiendasSrv()
        },
        err => {
          this.notifySrv.addNotification({
            status: 'error',
            message: 'Error al eliminar a la tienda'
          })
          this.isLoading = false;
        }
      );
    }
  }

  public abrirModalNuevoRolCargo(): void {
    this.DialogoActive({ esEditar: false })
  }

  public abrirModalEditarRolCargo(tienda: Tienda): void {
    this.DialogoActive({ esEditar: true, tienda })
  }

  private DialogoActive(dataRequired: DialogoTienda) {
    const dialogRef = this.dialog.open(NuevotiendaComponent, {
      width: '500px',
      data: dataRequired
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.listarTiendasSrv();
    });
  }
}
