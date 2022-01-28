import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { HttpClient } from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private apiUrl = "https://localhost:5001/api/recipes";
  constructor( private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`)
  }

  createRecipe(data: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, data);
  }
}
