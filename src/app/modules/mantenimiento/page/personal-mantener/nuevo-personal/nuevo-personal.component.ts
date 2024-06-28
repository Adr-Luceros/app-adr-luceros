import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/core/index.model.entity';
import { PersonalService } from 'src/app/core/services/https/personal.service';

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
    private dialogRef: MatDialogRef<NuevoPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esEditar = data.esEditar;
    this.nuevoPersonal = data.esEditar ? data.persona : {
      personal_id: null,
      nombre: '',
      nroDocumento: '',
      telefono: '',
      tipoDocumento: ''
    };
  }

  guardarPersonal(): void {
    if (this.esEditar) {
      this.personalService.editarPersona(this.nuevoPersonal.personal_id!, this.nuevoPersonal).subscribe(
        response => {
          console.log('Persona actualizada exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al actualizar el personal', error);
        }
      );
    } else {
      this.personalService.guardarPersona(this.nuevoPersonal).subscribe(
        response => {
          console.log('Persona guardada exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al guardar el personal', error);
        }
      );
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
