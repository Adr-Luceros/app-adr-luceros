import { CamionService } from './../../../../core/services/https/camion.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Camion } from 'src/app/core/index.model.entity';
import { NuevocamionComponent } from './nuevocamion/nuevocamion.component';

@Component({
  selector: 'app-camion-mantener',
  templateUrl: './camion-mantener.component.html',
  styleUrls: ['./camion-mantener.component.css']
})
export class CamionMantenerComponent implements OnInit {
  camions: Camion[] = [];

  constructor(
    private dialog: MatDialog,
    private camionService: CamionService
  ) {}

  ngOnInit(): void {
    this.listarCamion();
  }

  listarCamion(): void {
    this.camionService.listarCamion().subscribe(
      (data: Camion[]) => {
        this.camions = data;
      },
      (error) => {
        console.error('Error al listar los camiones:', error);
      }
    );
  }

  eliminarCamion(id: number | null): void {
    if (id !== null) {
      this.camionService.eliminarCamion(id).subscribe(
        response => {
          console.log('Camion eliminado:', response);
          this.listarCamion(); // Refresh the list after deletion
        },
        error => {
          console.error('Error al eliminar el camion:', error);
        }
      );
    }
  }

  abrirDialogoNuevoCamion(): void {
    const dialogRef = this.dialog.open(NuevocamionComponent, {
      width: '500px',
      data: { esEditar: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarCamion();
      }
    });
  }

  abrirDialogoEditarCamion(camion: Camion): void {
    const dialogRef = this.dialog.open(NuevocamionComponent, {
      width: '500px',
      data: { esEditar: true, camion }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarCamion();
      }
    });
  }
}
