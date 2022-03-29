import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.less']
})
export class MainRecipesComponent implements OnInit {

  @Input() recipes!: Recipe[];
  shortRecipes!: Recipe[];

  orderby!: string;

  constructor(private recipeService: RecipesService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.loadRecipes();
    let number = await this.getRecipesLength();
    this.recipes = await this.getLastest(number);
  }

  async loadRecipes(): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.getRecipes().subscribe((recipes) => {
        resolve((this.recipes = recipes));
      });
    });
  }

  async getRecipesLength(): Promise<number> {
    return new Promise((resolve) => {
      resolve(this.recipes?.length);
    });
  }

  async getLastest(amount: number): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipes = _.takeRight(this.recipes, amount);
      resolve(this.recipes);
    });
  }

  goToRecipeDetails(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe?.id]);
  }
}
