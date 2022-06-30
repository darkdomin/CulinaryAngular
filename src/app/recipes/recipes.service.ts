import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from './models/recipe';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { PagedResult } from './models/pagedResult';
import { Params, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {


  constructor(private http: HttpClient, private router: Router) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes`);
  }

  browse(params: Params): Observable<PagedResult<Recipe>> {
    return this.http.get<PagedResult<Recipe>>(`${environment.apiUrl}/recipes`, { params });
  }

  browseHome(params: Params): Observable<PagedResult<Recipe>> {
    return this.http.get<PagedResult<Recipe>>(`${environment.apiUrl}/recipes/home`, { params });
  }

  browsefavorite(params: Params): Observable<PagedResult<Recipe>> {
    return this.http.get<PagedResult<Recipe>>(`${environment.apiUrl}/recipes/favorite`, { params });
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${id}`);
  }

  createRecipe(data: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${environment.apiUrl}/recipes`, data);
  }

  updateRecipe(id: number, data: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${environment.apiUrl}/recipes/${id}`, data);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${environment.apiUrl}/recipes/${id}`).pipe(
      map(recipe => {
        this.router.navigate(['/home']);
        return recipe;
      })
    );
  }
}
