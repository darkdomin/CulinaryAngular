import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from './model/time';
import { HttpClient } from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecutionTimeService {

  private apiUrl = "https://localhost:5001/api/recipes/times";
  constructor( private http: HttpClient) { }

  getTimes(): Observable<Time[]> {
    return this.http.get<Time[]>(this.apiUrl)
  }

  getTime(id: number): Observable<Time> {
    return this.http.get<Time>(`${this.apiUrl}/${id}`)
  }
}
