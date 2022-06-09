import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuisine } from './cuisine';

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {

  constructor( private http: HttpClient) { }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get<Cuisine[]>(`${environment.apiUrl}/recipes/cuisines`);
  }

  getCuisine(id: number): Observable<Cuisine> {
    return this.http.get<Cuisine>(`${environment.apiUrl}/recipes/cuisines/${id}`)
  }
}
