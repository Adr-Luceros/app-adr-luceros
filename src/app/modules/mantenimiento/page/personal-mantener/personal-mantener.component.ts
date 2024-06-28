import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Persona } from 'src/app/core/index.model.entity';
import { PersonalService } from './../../../../core/services/https/personal.service';
import { NuevoPersonalComponent } from './nuevo-personal/nuevo-personal.component';

@Component({
  selector: 'app-personal-mantener',
  templateUrl: './personal-mantener.component.html',
  styleUrls: ['./personal-mantener.component.css']
})
export class PersonalMantenerComponent implements OnInit {
  personal: Persona[] = [];

  constructor(
    private dialog: MatDialog,
    private PersonalService: PersonalService
  ) {}

  ngOnInit(): void {
    this.listarPersonal();
  }

  listarPersonal(): void {
    this.PersonalService.listarPersona().subscribe(
      (data: Persona[]) => {
        this.personal = data;
      },
      (error) => {
        console.error('Error al listar el personal:', error);
      }
    );
  }

  deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este personal?');
    if (confirmar && id != null) {
      this.PersonalService.eliminarPersona(id).subscribe(
        () => {
          this.listarPersonal();
        },
        err => {
          console.error('Error al eliminar el personal', err);
        }
      );
    }
  }

  abrirModalNuevoPersonal(): void {
    const dialogRef = this.dialog.open(NuevoPersonalComponent, {
      width: '500px',
      data: { esEditar: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarPersonal();
      }
    });
  }

  abrirModalEditarPersonal(persona: Persona): void {
    const dialogRef = this.dialog.open(NuevoPersonalComponent, {
      width: '500px',
      data: { esEditar: true, persona }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarPersonal();
      }
    });
  }
}
