import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Recipe } from './models/recipe';
import  './recipe-resolve.service';
import { RecipesService } from './recipes.service';


@Injectable()
export class RecipeResolve implements Resolve<Recipe>{

  constructor(private recipeService: RecipesService){}


  resolve(route: ActivatedRouteSnapshot) {
    const id: number = this.getRouteId(route);
    return this.recipeService.getRecipe(id);
  }

  private getRouteId(route: ActivatedRouteSnapshot): number {
    return +route.paramMap.get('id')!;
  }

}

