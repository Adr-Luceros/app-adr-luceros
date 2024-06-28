import { RolcargoService } from './../../../../core/services/https/rolcargo.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RolCargo } from 'src/app/core/model/Entity/RolCargo';
import { NuevorolcargoComponent } from './nuevorolcargo/nuevorolcargo.component';

@Component({
  selector: 'app-rol-cargo-mantener',
  templateUrl: './rol-cargo-mantener.component.html',
  styleUrls: ['./rol-cargo-mantener.component.css']
})
export class RolCargoMantenerComponent implements OnInit{
  rolcargol: RolCargo[] = [];

  constructor(
    private dialog: MatDialog,
    private rolCargoService: RolcargoService
  ) {}

  ngOnInit(): void {
    this.listarRolCargo();
  }

  listarRolCargo(): void {
    this.rolCargoService.listarRolCargo().subscribe(
      (data: RolCargo[]) => {
        this.rolcargol = data;
      },
      (error) => {
        console.error('Error al listar el personal:', error);
      }
    );
  }

  deleteItem(id: number | null) {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este personal?');
    if (confirmar && id != null) {
      this.rolCargoService.eliminarRolCargo(id).subscribe(
        () => {
          this.listarRolCargo();
        },
        err => {
          console.error('Error al eliminar el personal', err);
        }
      );
    }
  }

  abrirModalNuevoRolCargo(): void {
    const dialogRef = this.dialog.open(NuevorolcargoComponent, {
      width: '500px',
      data: { esEditar: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarRolCargo();
      }
    });
  }

  abrirModalEditarRolCargo(rolcargo: RolCargo): void {
    const dialogRef = this.dialog.open(NuevorolcargoComponent, {
      width: '500px',
      data: { esEditar: true, rolcargo }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listarRolCargo();
      }
    });
  }
}
