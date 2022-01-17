import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { HttpClient } from "@angular/common/http";
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private apiUrl = "https://localhost:5001/api/recipe";
  constructor( private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
           //.map((res)=>res.json);
  }
}
