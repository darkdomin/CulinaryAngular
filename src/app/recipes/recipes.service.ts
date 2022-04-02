import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { HttpClient } from "@angular/common/http";
import 'rxjs';
import { PagedResult } from './models/pagedResult';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private apiUrl = "https://localhost:5001/api/recipes";

  constructor( private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  //  browse(pageSize:number, page: number, text: string): Observable<PagedResult<Recipe>> {
  //    return this.http.get<PagedResult<Recipe>>(this.apiUrl+'?pageSize='+pageSize+'&pageNumber='+page+'&searchPhrase='+text);//Recipe[]
  // }

  browse(params: any): Observable<PagedResult<Recipe>> {
    return this.http.get<PagedResult<Recipe>>(this.apiUrl, { params });
  }


  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  createRecipe(data: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, data);
  }

  updateRecipe(id: number, data: Recipe): Observable<Recipe>{
    return this.http.put<Recipe>(`${this.apiUrl}/${id}`, data );
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/${id}`)
  }
}
