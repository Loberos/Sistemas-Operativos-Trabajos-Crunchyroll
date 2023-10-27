import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../model/usuario.model";

@Injectable({
  providedIn: 'root',
})
export class ApiUsuariosService {
  private apiUrl = 'http://172.191.157.190';

  constructor(private http: HttpClient) {}

  registerUsuario(usuario: Usuario): Observable<any> {
    console.log(usuario)
    return this.http.post(`${this.apiUrl}/users`, usuario);
  }
  autenticarUsuario(correo: string, contrasenia: string): Observable<any> {
    const params = {
      correo: correo,
      contrasenia: contrasenia
    };
    return this.http.get(`${this.apiUrl}/users`, { params: params });
  }



}
