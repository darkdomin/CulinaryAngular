import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent implements OnInit {
  recipes!: Recipe[];
  shortRecipes!: Recipe[];

  orderby!: string;

  constructor(private recipeService: RecipesService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.loadRecipes();
    let number = this.getRecipesLength();
    this.recipes = await this.getLastest(number);
  }

  async loadRecipes(): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipeService.getRecipes().subscribe((recipes) => {
        resolve((this.recipes = recipes));
      });
    });
  }

  getRecipesLength(): number {
    return this.recipes?.length;
  }

  async getLastest(amount: number): Promise<Recipe[]> {
    this.recipes = _.takeRight(this.recipes, amount);
    return this.recipes;
  }

  goToRecipeDetails(recipe: Recipe) {
    this.router.navigate(['/recipes', recipe?.id]);
  }
}
