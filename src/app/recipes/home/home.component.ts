import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {

  recipes!: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
    this.recipes = recipes;
    });
  }

  goToRecipeDetails(recipe: Recipe){
    this.router.navigate(['/recipes', recipe?.id]);
}
}
