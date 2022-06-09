import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Difficulty } from './models/difficulty';

@Injectable({
  providedIn: 'root'
})
export class DifficultyLevelService {

  constructor( private http: HttpClient) { }

  getDifficultyLevels(): Observable<Difficulty[]> {
    return this.http.get<Difficulty[]>(`${environment.apiUrl}/recipes/difficultyLevel`)
  }

  getDifficultyLevel(id: number): Observable<Difficulty> {
    return this.http.get<Difficulty>(`${environment.apiUrl}/recipes/difficultyLevel/${id}`)
  }
}
