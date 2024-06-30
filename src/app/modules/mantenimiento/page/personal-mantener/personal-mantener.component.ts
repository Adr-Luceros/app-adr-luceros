import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/core/index.model.entity';
import { PersonalService } from './../../../../core/services/https/personal.service';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';
import { NotifyService } from 'src/app/core/index.service.triggers';
import { NameEntity } from '../../mantenimiento.component';

export interface DialogoPersona {
  esEditar: boolean,
  persona?: Persona
}

@Component({
  selector: 'app-personal-mantener',
  templateUrl: './personal-mantener.component.html',
  styleUrls: ['./personal-mantener.component.css']
})
export class PersonalMantenerComponent implements OnInit {
  personal: Persona[] = [];
  searchText: string = '';

  constructor(
    private dialog: MatDialog,
    private PersonalService: PersonalService,
    private notifySrv: NotifyService
  ) { }

  ngOnInit(): void {
    this.listarPersonal();
  }

  listarPersonal(): void {
    this.PersonalService.listarPersona().subscribe(
      res => {
        this.personal = res;
        const nombreEntidad: NameEntity = 'Personal'
        localStorage.setItem(nombreEntidad, res.length.toString());
      },
      err => this.notifySrv.addNotification({
        status: 'error',
        message: 'Error al listar personas'
      })
    );
  }

  deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este personal?');
    if (confirmar && id != null) {
      this.PersonalService.eliminarPersona(id).subscribe(
        res => {
          this.notifySrv.addNotification({
            status: 'success',
            message: 'Persona eliminada exitosamente'
          });
          this.listarPersonal();
        },
        err => this.notifySrv.addNotification({
          status: 'error',
          message: 'Error al eliminar al personal'
        })
      );
    }
  }

  abrirModalNuevoPersonal(): void {
    this.DialogoActive({ esEditar: false })
  }

  abrirModalEditarPersonal(persona: Persona): void {
    this.DialogoActive({ esEditar: true, persona })
  }

  private DialogoActive(dataRequired: DialogoPersona) {
    const dialogRef = this.dialog.open(NuevoPersonalComponent, {
      width: '500px',
      data: dataRequired
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.listarPersonal();
    });
  }
}
