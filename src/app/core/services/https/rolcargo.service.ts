import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolCargo } from '../../model/Entity/RolCargo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolcargoService {
  private url = 'http://localhost:8856/apirolcargo';

  constructor(private http: HttpClient) { }

  listarRolCargo(): Observable<RolCargo[]> {
    return this.http.get<RolCargo[]>(`${this.url}/listar`);
  }

  guardarRolCargo(rolcargo: RolCargo): Observable<String> {
    console.log(rolcargo)
    return this.http.post(`${this.url}/create`, rolcargo, { responseType: 'text' });
  }

  eliminarRolCargo(id: number): Observable<String> {
    const url = `${this.url}/delete/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  editarRolCargo(id: number, rolcargoActualizado: RolCargo): Observable<String> {
    const url = `${this.url}/update/${id}`;
    return this.http.put(url, rolcargoActualizado, {responseType: 'text'});
  }
}
