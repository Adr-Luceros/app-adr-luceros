import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Camion, Persona } from '../../index.model.entity';

@Injectable({
  providedIn: 'root'
})
export class CamionService {
  private url = 'http://localhost:8860/apicamion';

  constructor(private http: HttpClient) { }

  listarCamion(): Observable<Camion[]> {
    return this.http.get<Camion[]>(`${this.url}/listar`);
  }

  
  guardarCamion(camion: Camion): Observable<String> {
    console.log(camion)
    return this.http.post(`${this.url}/create`, camion, { responseType: 'text' });
  }

  eliminarCamion(id: number): Observable<String> {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  editarCamion(id: number, camionActualizado: Camion): Observable<String> {
    const url = `${this.url}/update/${id}`;
    return this.http.put(url, camionActualizado, {responseType: 'text'});
  }
}

