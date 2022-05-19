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
  @Input('mainHeader') headerText!: string;
  totalItem: number = 0;
  searchPhrase: string = '';
  page: number = 1;
  pageSize: number = 12;
  isHome = false;

  constructor(
    protected recipeService: RecipesService,
    protected router: Router
  ) {}

  async ngOnInit(): Promise<void> {}

  async loadRecipes(params: Params): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.browse(params)
      .subscribe(recipes => {
        this.totalItem = recipes.totalItemsCount;
        resolve((this.recipes = recipes.items));
      });
    });
  }

  getRequestParams(
    page: number,
    pageSize: number,
    searchTitle: string,
    isHome: boolean
  ): Params {
    let params: Params = {};

    if (searchTitle) {
      params[`searchPhrase`] = searchTitle;
    }

    if (page) {
      params[`pageNumber`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (isHome) {
      params['isHome'] = isHome;
    }

    return params;
  }

  async goToRecipeDetails(recipe: Recipe): Promise<boolean> {
    return new Promise(resolve => {
      resolve(this.router.navigate(['/recipes', recipe?.id]));
    });
  }
}
