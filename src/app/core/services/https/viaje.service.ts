import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViajeExcel } from '../../index.model.entity';
import { Observable } from 'rxjs';
import { Message } from '../../index.model.system';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private url: string = 'http://localhost:8080/api/v1/recopilar/';

  constructor(
    private httpClient: HttpClient
  ) { }

  transferExcel(selectedFile: File): Observable<Message> {
    const formData = new FormData();
    formData.append('file', selectedFile);

    return this.httpClient.post<Message>(this.url + 'excel', formData)
  }

  getViajes(): Observable<ViajeExcel[]> {
    return this.httpClient.get<ViajeExcel[]>(this.url + 'listar');
  }

  getViajesPorRango(fechaInicio: string, fechaFin: string): Observable<ViajeExcel[]> {
    return this.httpClient.get<ViajeExcel[]>(this.url + `rango?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
  }
}
