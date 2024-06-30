import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/core/index.model.entity';
import { PersonalService } from 'src/app/core/services/https/personal.service';
import { DialogoPersona } from '../personal-mantener.component';
import { NotifyService } from 'src/app/core/index.service.triggers';

@Component({
  selector: 'app-nuevo-personal',
  templateUrl: './nuevo-personal.component.html',
  styleUrls: ['./nuevo-personal.component.css']
})
export class NuevoPersonalComponent {
  nuevoPersonal: Persona;
  esEditar: boolean;

  constructor(
    private personalService: PersonalService,
    private notifySrv: NotifyService,
    private dialogRef: MatDialogRef<NuevoPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoPersona
  ) {
    this.esEditar = data.esEditar;
    this.nuevoPersonal = data.persona ?? new Persona;
  }

  public guardarCambios(): void {
    if (this.esEditar) {
      this.editarPersona();
    } else {
      this.guardarPersona();
    }
  }

  private guardarPersona() {
    this.personalService.guardarPersona(this.nuevoPersonal).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Persona guardada exitosamente'
        })
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al guardar persona'
      })
    );
  }

  private editarPersona() {
    this.personalService.editarPersona(this.nuevoPersonal.personal_id!, this.nuevoPersonal).subscribe(
      res => {
        this.notifySrv.addNotification({
          status: 'success',
          message: 'Persona editada exitosamente'
        });
        this.dialogRef.close(true);
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al editar persona'
      })
    );
  }

  public cerrarModal(): void {
    this.dialogRef.close();
  }
}
