import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicios } from '../../index.interface';
import { Observable, map } from 'rxjs';
import { ServiciosModel } from '../../interface/backend/servicios.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  url: string = 'assets/json/servicios.json'
  constructor(
    private http: HttpClient
  ) {}

  getServicios(): Observable<Servicios[]> {
    return this.http.get<ServiciosModel[]>(this.url).pipe(
      map(res => res.map(obj => Servicios.fromBackend(obj)))
    );
  }
}
