import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Difficulty } from './models/difficulty';

@Injectable({
  providedIn: 'root'
})
export class DifficultyLevelService {

  private apiUrl = "https://localhost:5001/api/recipes/difficultyLevel";
  constructor( private http: HttpClient) { }

  getDifficultyLevels(): Observable<Difficulty[]> {
    return this.http.get<Difficulty[]>(this.apiUrl)
  }

  getDifficultyLevel(id: number): Observable<Difficulty> {
    return this.http.get<Difficulty>(`${this.apiUrl}/${id}`)
  }
}
