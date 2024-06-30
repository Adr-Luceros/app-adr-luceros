import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Camion } from 'src/app/core/index.model.entity';
import { NuevocamionComponent } from './nuevocamion/nuevocamion.component';
import { CamionService } from 'src/app/core/index.service.https';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { Subscription } from 'rxjs';
import { NameEntity } from '../../mantenimiento.component';

export interface DialogoCamion {
  esEditar: boolean,
  camion?: Camion
}

@Component({
  selector: 'app-camion-mantener',
  templateUrl: './camion-mantener.component.html',
  styleUrls: ['./camion-mantener.component.css']
})
export class CamionMantenerComponent implements OnInit, OnDestroy {
  camions: Camion[] = [];
  camionSub: Subscription = new Subscription();
  searchText: string = '';

  constructor(
    private dialog: MatDialog,
    private camionService: CamionService,
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.listarCamion();
  }

  ngOnDestroy(): void {
    if (this.camionSub) this.camionSub.unsubscribe();
  }

  listarCamion(): void {
    this.camionSub = this.camionService.listarCamion().subscribe(
      res => {
        this.camions = res;
        const nombreEntidad: NameEntity = 'Camion'
        localStorage.setItem(nombreEntidad, res.length.toString());
      },
      err => {
        this.notifySrv.addNotification({
          status: 'error',
          message: 'Error al listar Camiones'
        })
      }
    );
  }

  eliminarCamion(id: number | null): void {
    if (id !== null) {
      this.camionSub = this.camionService.eliminarCamion(id).subscribe(
        res => {
          this.notifySrv.addNotification({
            status: 'success',
            message: 'Camión eliminado'
          })
          this.listarCamion();
        },
        err => {
          this.notifySrv.addNotification({
            status: 'error',
            message: 'Error al eliminar al camión'
          })
        }
      );
    }
  }

  public abrirDialogoNuevoCamion(): void {
    this.DialogoActive({ esEditar: true })
  }

  public abrirDialogoEditarCamion(camion: Camion): void {
    this.DialogoActive({ esEditar: true, camion })
  }

  private DialogoActive(dataRequired: DialogoCamion) {
    const dialogRef = this.dialog.open(NuevocamionComponent, {
      width: '500px',
      data: dataRequired
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.listarCamion();
    });
  }
}
