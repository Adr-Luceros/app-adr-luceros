import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camion, Persona } from '../../index.model.entity';
import { Capacidad } from '../../model/Entity/Capacidad';

@Injectable({
  providedIn: 'root'
})
export class CapacidadService {
  private url = 'http://localhost:8857/apicapacidad';

  constructor(private http: HttpClient) { }

  listarCapacidad(): Observable<Capacidad[]> {
    return this.http.get<Capacidad[]>(`${this.url}/listar`);
  }
  
  guardarCapacidad(capacidad: Capacidad): Observable<String> {
    console.log(capacidad)
    return this.http.post(`${this.url}/create`, capacidad, { responseType: 'text' });
  }

  eliminarCapacidad(id: number): Observable<String> {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  editarCapacidad(id: number, capacidadActualizado: Capacidad): Observable<String> {
    const url = `${this.url}/update/${id}`;
    return this.http.put(url, capacidadActualizado, {responseType: 'text'});
  }
}

