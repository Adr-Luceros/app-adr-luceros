import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolCargo } from 'src/app/core/model/Entity/RolCargo';
import { RolcargoService } from 'src/app/core/services/https/rolcargo.service';

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
    private dialogRef: MatDialogRef<NuevorolcargoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esEditar = data.esEditar;
    this.nuevoRolCargo = data.esEditar ? data.rolcargo : {
      rolcargo_id: null,
      nombre: '',
     
    };
  }

  guardarRolCargo(): void {
    if (this.esEditar) {
      this.rolcargoService.editarRolCargo(this.nuevoRolCargo.rolcargo_id!, this.nuevoRolCargo).subscribe(
        response => {
          console.log('Rol Cargo actualizada exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al actualizar el rolcargo', error);
        }
      );
    } else {
      this.rolcargoService.guardarRolCargo(this.nuevoRolCargo).subscribe(
        response => {
          console.log('Rolcargo guardada exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al guardar el rolcargo', error);
        }
      );
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}

