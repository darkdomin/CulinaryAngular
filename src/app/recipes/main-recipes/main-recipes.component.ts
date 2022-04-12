import { Component, Input, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.less'],
})
export class MainRecipesComponent implements OnInit {
  @Input('mainRecipe') recipes!: Recipe[];
  recipe!: Recipe;
  shortRecipes!: Recipe[];
  @Input('mainHeader') headerText!: string;
  orderby!: string;
  totalItem: number = 0;
  constructor(
    protected recipeService: RecipesService,
    protected router: Router
  ) {}

  async ngOnInit(): Promise<void> {

  }

  async loadRecipes(params: Params): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.browse(params)
      .subscribe((recipes) => {
        this.totalItem = recipes.totalItemsCount;
        console.log(this.recipes)
      resolve((this.recipes = recipes.items));
      });
    });
  }

  getRequestParams( page: number, pageSize: number, searchTitle: string,): Params {
    let params: any = {};

    if (searchTitle) {
      params[`searchPhrase`] = searchTitle;
    }

    if (page) {
      params[`pageNumber`] = page ;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    return params;
  }

  goToRecipeDetails(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe?.id]);
  }
}
