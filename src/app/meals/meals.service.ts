import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Meal } from './models/meal';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl = 'https://localhost:5001/api/meals';
  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl);
  }
}
