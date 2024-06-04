import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diario } from '../../index.interface';
import { Observable, map } from 'rxjs';
import { DiarioModel } from '../../interface/backend/diario.model';

@Injectable({
  providedIn: 'root'
})
export class DiarioService {
  url: string = 'assets/json/diario.json';
  constructor(
    private http: HttpClient
  ) {}

  getDiario(): Observable<Diario[]> {
    return this.http.get<DiarioModel[]>(this.url).pipe(
      map(res => res.map(obj => Diario.desdeBackend(obj)))
    );
  }

}
