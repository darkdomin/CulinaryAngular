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

  constructor(
    protected recipeService: RecipesService,
    protected router: Router
  ) {}

  async ngOnInit(): Promise<void> {

  }






  goToRecipeDetails(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe?.id]);
  }
}
