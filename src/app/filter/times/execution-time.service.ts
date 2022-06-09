import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time } from './model/time';
import { HttpClient } from "@angular/common/http";
import 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExecutionTimeService {

  constructor( private http: HttpClient) { }

  getTimes(): Observable<Time[]> {
    return this.http.get<Time[]>(`${environment.apiUrl}/recipes/times`)
  }

  getTime(id: number): Observable<Time> {
    return this.http.get<Time>(`${environment.apiUrl}/recipes/times/${id}`)
  }
}
