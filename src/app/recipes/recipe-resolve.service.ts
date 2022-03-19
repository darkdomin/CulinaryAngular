import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Recipe } from './models/recipe';
import  './recipe-resolve.service';
import { RecipesService } from './recipes.service';


@Injectable()
export class RecipeResolve implements Resolve<Recipe>{

  num!: number;
  constructor(private recipeService: RecipesService){}


  resolve(route: ActivatedRouteSnapshot) {
    return this.recipeService.getRecipe(route.params['id']);
  }
}

