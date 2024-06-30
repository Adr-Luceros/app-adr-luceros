import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolCargo } from 'src/app/core/model/Entity/RolCargo';
import { RolcargoService } from 'src/app/core/services/https/rolcargo.service';
import { DialogoRolCargo } from '../rol-cargo-mantener.component';
import { NotifyService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-nuevorolcargo',
  templateUrl: './nuevorolcargo.component.html',
  styleUrls: ['./nuevorolcargo.component.css']
})
export class NuevorolcargoComponent {
  nuevoRolCargo: RolCargo;
  esEditar: boolean;

  constructor(
    private rolcargoService: RolcargoService,
    private notifySrv: NotifyService,
    private dialogRef: MatDialogRef<NuevorolcargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoRolCargo
  ) {
    this.esEditar = data.esEditar;
    this.nuevoRolCargo = data.rolcargo ?? new RolCargo();
  }

  public guardarCambios(): void {
    if (this.esEditar) {
      this.editarRolCargo();
    } else {
      this.guardarRolCargo();
    }
  }

  private guardarRolCargo(): void {
    this.rolcargoService.guardarRolCargo(this.nuevoRolCargo).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Rolcargo guardada exitosamente'
        })
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al guardar el rolcargo'
      })
    );
  }

  private editarRolCargo(): void {
    this.rolcargoService.editarRolCargo(this.nuevoRolCargo.rolcargo_id!, this.nuevoRolCargo).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Rolcargo editado exitosamente'
        })
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al editar el rolcargo'
      })
    );
  }

  public cerrarModal(): void {
    this.dialogRef.close();
  }
}

