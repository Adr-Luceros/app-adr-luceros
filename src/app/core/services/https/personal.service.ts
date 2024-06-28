import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../../index.model.entity';
import { Observable, catchError, map, throwError } from 'rxjs';

interface Message {
  msg: string
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
 
  private url = 'http://localhost:8853/apipersonal';

  constructor(private http: HttpClient) { }

  listarPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}/listar`);
  }

  guardarPersona(persona: Persona): Observable<String> {
    console.log(persona)
    return this.http.post(`${this.url}/create`, persona, { responseType: 'text' });
  }

  eliminarPersona(id: number): Observable<String> {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  editarPersona(id: number, personaActualizado: Persona): Observable<String> {
    const url = `${this.url}/update/${id}`;
    return this.http.put(url, personaActualizado, {responseType: 'text'});
  }
}
