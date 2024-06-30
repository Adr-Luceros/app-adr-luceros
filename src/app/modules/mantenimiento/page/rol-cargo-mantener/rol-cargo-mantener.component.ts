import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NuevorolcargoComponent } from './nuevorolcargo/nuevorolcargo.component';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { RolcargoService } from 'src/app/core/index.service.https';
import { RolCargo } from 'src/app/core/index.model.entity';

export interface DialogoRolCargo {
  esEditar: boolean,
  rolcargo?: RolCargo
}

@Component({
  selector: 'app-rol-cargo-mantener',
  templateUrl: './rol-cargo-mantener.component.html',
  styleUrls: ['./rol-cargo-mantener.component.css']
})
export class RolCargoMantenerComponent implements OnInit {
  rolcargol: RolCargo[] = [];
  searchText: string = '';

  constructor(
    private dialog: MatDialog,
    private notifySrv: NotifyService,
    private rolCargoService: RolcargoService
  ) { }

  ngOnInit(): void {
    this.listarRolCargo();
  }

  private listarRolCargo(): void {
    this.rolCargoService.listarRolCargo().subscribe(
      res => this.rolcargol = res,
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al listar Roles para viajes'
      })
    );
  }

  public deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este personal?');
    if (confirmar && id != null) {
      this.rolCargoService.eliminarRolCargo(id).subscribe(
        res => this.listarRolCargo(),
        err => this.notifySrv.addNotification({
          status: 'error',
          message: 'Error al eliminar al personal'
        })
      );
    }
  }

  public abrirModalNuevoRolCargo(): void {
    this.DialogoActive({ esEditar: false });
  }

  public abrirModalEditarRolCargo(rolcargo: RolCargo): void {
    this.DialogoActive({ esEditar: true, rolcargo });
  }

  private DialogoActive(dataRequired: DialogoRolCargo) {
    const dialogRef = this.dialog.open(NuevorolcargoComponent, {
      width: '500px',
      data: dataRequired
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.listarRolCargo();
    });
  }
}
