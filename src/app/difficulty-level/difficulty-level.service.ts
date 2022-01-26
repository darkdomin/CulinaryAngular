import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from './models/level';

@Injectable({
  providedIn: 'root'
})
export class DifficultyLevelService {

  private apiUrl = "https://localhost:5001/api/difficultyLevel";
  constructor( private http: HttpClient) { }

  getDifficultyLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.apiUrl)
  }

  getDifficultyLevel(id: number): Observable<Level> {
    return this.http.get<Level>(`${this.apiUrl}/${id}`)
  }
}
