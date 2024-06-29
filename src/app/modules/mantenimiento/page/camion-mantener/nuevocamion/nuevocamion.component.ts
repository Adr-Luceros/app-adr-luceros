import { CapacidadService } from './../../../../../core/services/https/capacidad.service';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Camion } from 'src/app/core/index.model.entity';
import { Capacidad } from 'src/app/core/model/Entity/Capacidad';
import { CamionService } from 'src/app/core/services/https/camion.service';

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

  capacidadSub: Subscription = new Subscription();
  camionSub: Subscription = new Subscription();

  constructor(
    private camionService: CamionService,
    private capacidadService: CapacidadService,
    private dialogRef: MatDialogRef<NuevocamionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.esEditar = data.esEditar;
    if (this.esEditar && data.camion) {
      this.nuevoCamion = data.camion;
    } else {
      this.nuevoCamion = new Camion();
      this.nuevoCamion.capacidad = new Capacidad();
    }

    if (this.nuevoCamion.capacidad === null || this.nuevoCamion.capacidad.capacidad_id === null) {
      this.capacidadSeleccionada.capacidad_id = 0;
    } else {
      this.capacidadSeleccionada.capacidad_id = this.nuevoCamion.capacidad.capacidad_id;
    }
  }

  ngOnInit(): void {
    this.capacidadSub = this.capacidadService.listarCapacidad().subscribe(
      caps => this.capacidades = caps,
      error => console.error('Error al listar capacidades:', error)
    );
  }

  guardarCamion(): void {
    if (this.capacidadSeleccionada.capacidad_id !== null) {
      this.nuevoCamion.capacidad = this.capacidadSeleccionada;
    }

    if (this.esEditar) {
      this.camionSub = this.camionService.editarCamion(this.nuevoCamion.camion_id!, this.nuevoCamion).subscribe(
        response => this.dialogRef.close(true),
        error => console.error('Error al actualizar el camion', error)
      );
    } else {
      this.camionSub = this.camionService.guardarCamion(this.nuevoCamion).subscribe(
        response => this.dialogRef.close(true),
        error => console.error('Error al guardar el camion', error)
      );
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
