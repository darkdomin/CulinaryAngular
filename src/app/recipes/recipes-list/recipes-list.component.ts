import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent implements OnInit {
  constructor(private recipeService: RecipesService,
              private router: Router) {}

  ngOnInit(): void {
    this.loadRecipes();
  }

  recipes!: Recipe[];

   goToRecipeDetails(recipe: Recipe){
      this.router.navigate(['/recipes', recipe?.id]);
  }

  loadRecipes(): void{
    this.recipeService.getRecipes().subscribe((recipes)=>{
      this.recipes = recipes;
    })
  }
}
