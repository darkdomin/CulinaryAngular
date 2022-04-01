import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { PagedResult } from '../models/pagedResult';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.less']
})
export class MainRecipesComponent implements OnInit {

  @Input("mainRecipe") recipes!: Recipe[];
  shortRecipes!: Recipe[];
  @Input("mainHeader") headerText!: string;
  orderby!: string;

  constructor(protected recipeService: RecipesService, protected router: Router) {}

  async ngOnInit(): Promise<void> {
   // await this.loadRecipes2(15,1,'');
  }

  async loadRecipes(): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.getRecipes().subscribe((recipes) => {
        resolve((this.recipes = recipes));
      });
    });
  }

  async loadRecipes2(pageSize: number, page: number, searchText: string): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.browse(pageSize,page,searchText).subscribe((recipes) => { //'kebab'
        resolve((this.recipes = recipes.items));
      });
    });
  }



  goToRecipeDetails(recipe: Recipe) {
   this.router.navigate(['/recipes', recipe?.id]);
  }
}
