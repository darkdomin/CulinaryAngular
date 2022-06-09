import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Meal } from './models/meal';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MealService {

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${environment.apiUrl}/recipes/meals`);
  }

  getMeal(id: number): Observable<Meal> {
    return this.http.get<Meal>(`${environment.apiUrl}/recipes/meals/${id}`)
  }
}
