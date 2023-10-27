import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAnimesService {
  private apiUrl = 'http://172.191.157.190';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<any[]> {
    const endpoint = '/series-anime';
    return this.http.get<any[]>(`${this.apiUrl}${endpoint}`);
  }

  getAnimeDetails(titulo: string | null): Observable<any> {
    const endpoint = `/series-anime/by_name/${titulo}`;
    return this.http.get<any>(`${this.apiUrl}${endpoint}`);
  }
}
