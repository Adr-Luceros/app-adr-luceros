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
  }

  ngOnInit(): void {
    this.listarCapacidades();
  }


  private listarCapacidades(): void {
    this.capacidadSub = this.capacidadService.listarCapacidad().subscribe(
      (data: Capacidad[]) => {
        this.capacidades = data;
      },
      error => {
        console.error('Error al listar capacidades:', error);
      }
    );
  }

  guardarCamion(): void {
    console.log('Datos del camión a enviar:', this.nuevoCamion); // Añade este log para verificar los datos
    if (this.esEditar) {
      this.camionSub = this.camionService.editarCamion(this.nuevoCamion.camion_id!, this.nuevoCamion).subscribe(
        response => {
          console.log('Camion actualizado exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al actualizar el camion', error);
        }
      );
    } else {
      this.camionSub = this.camionService.guardarCamion(this.nuevoCamion).subscribe(
        response => {
          console.log('Camion guardado exitosamente:', response);
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error al guardar el camion', error);
        }
      );
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
