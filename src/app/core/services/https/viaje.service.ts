import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Viaje } from '../../index.model.frontend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private url: string = '/assets/json/viaje-recopilado.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  getViajes(): Observable<Viaje[]> {
    return this.httpClient.get<Viaje[]>(this.url);
  }
}
