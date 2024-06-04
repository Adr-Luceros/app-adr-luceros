import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../../index.interface';
import { ClienteModel } from '../../interface/backend/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url: string = 'assets/json/clientes.json';

  constructor(
    private http: HttpClient
  ) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<ClienteModel[]>(this.url).pipe(
      map(res => res.map(obj => Cliente.fromBackend(obj)))
    );
  }
}
