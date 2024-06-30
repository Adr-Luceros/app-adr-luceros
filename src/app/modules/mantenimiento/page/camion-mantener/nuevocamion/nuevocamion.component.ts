import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Camion, Capacidad } from 'src/app/core/index.model.entity';
import { CapacidadService, CamionService } from 'src/app/core/index.service.https';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { DialogoCamion } from '../camion-mantener.component';

@Component({
  selector: 'app-nuevocamion',
  templateUrl: './nuevocamion.component.html',
  styleUrls: ['./nuevocamion.component.css']
})
export class NuevocamionComponent implements OnInit {
  nuevoCamion: Camion = new Camion();
  capacidadSeleccionada: Capacidad = new Capacidad();
  capacidades: Capacidad[] = [];
  esEditar: boolean;

  constructor(
    private camionSrv: CamionService,
    private capacidadSrv: CapacidadService,
    private notitySrv: NotifyService,
    private dialogRef: MatDialogRef<NuevocamionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogoCamion
  ) {
    this.esEditar = data.esEditar;
    this.nuevoCamion = data.camion ?? new Camion();

    const isInvalidIdCapacidad = this.nuevoCamion.capacidad === null || this.nuevoCamion.capacidad.capacidad_id === null;
    const idCapacidad = isInvalidIdCapacidad ? 0 : this.nuevoCamion.capacidad.capacidad_id;
    this.capacidadSeleccionada.capacidad_id = idCapacidad;
  }

  ngOnInit(): void {
    this.capacidadSrv.listarCapacidad().subscribe(
      caps => this.capacidades = caps,
      error => this.notitySrv.addNotification({
        status: 'error',
        message: 'Error al listar capacidad de carga'
      })
    );
  }

  public guardarCambios(): void {
    if (this.capacidadSeleccionada.capacidad_id !== null) {
      this.nuevoCamion.capacidad = this.capacidadSeleccionada;
    }

    if (this.esEditar) {
      this.editarCamion();
    } else {
      this.guardarCamion();
    }
  }

  private editarCamion(): void {
    this.camionSrv.editarCamion(this.nuevoCamion.camion_id!, this.nuevoCamion).subscribe(
      response => {
        this.notitySrv.addNotification({
          status: 'success',
          message: 'Camión editado Exitosamente'
        })
        this.dialogRef.close(true);
      },
      error => this.notitySrv.addNotification({
        status: 'error',
        message: 'Error al editar el camión'
      })
    );
  }

  private guardarCamion() {
    this.camionSrv.guardarCamion(this.nuevoCamion).subscribe(
      response => {
        this.notitySrv.addNotification({
          status: 'success',
          message: 'Camión guardado Exitosamente'
        })
        this.dialogRef.close(true);
      },
      error => this.notitySrv.addNotification({
        status: 'error',
        message: 'Error al guardar al camión'
      })
    );
  }

  public cerrarModal(): void {
    this.dialogRef.close();
  }
}
