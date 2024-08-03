import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tienda } from '../../index.model.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private url = 'http://localhost:8080/apitienda';

  constructor(private http: HttpClient) { }

  listarTienda(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(`${this.url}/listar`);
  }


  guardarTienda(tienda: Tienda): Observable<String> {
    return this.http.post(`${this.url}/create`, tienda, { responseType: 'text' });
  }

  eliminarTienda(id: number): Observable<String> {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  editarTienda(id: number, tiendaActualizado: Tienda): Observable<String> {
    const url = `${this.url}/update/${id}`;
    return this.http.put(url, tiendaActualizado, { responseType: 'text' });
  }
}
