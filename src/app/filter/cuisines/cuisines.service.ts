import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuisine } from './cuisine';

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {

  private apiUrl = "https://localhost:5001/api/recipes/cuisines";
  constructor( private http: HttpClient) { }

  getCuisines(): Observable<Cuisine[]> {
    return this.http.get<Cuisine[]>(this.apiUrl)
  }

  getCuisine(id: number): Observable<Cuisine> {
    return this.http.get<Cuisine>(`${this.apiUrl}/${id}`)
  }
}
