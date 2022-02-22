import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {

  recipes!: Recipe[];
  shortRecipes!: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRecipes(9);
  }

  @HostListener("window:resize") onResize() {
    if(this.detectScreenSize() < 1200){
      this.loadRecipes(8);
    }
    else{
      this.loadRecipes(9);
    }
  }

  loadRecipes(amount: number): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
    this.recipes = recipes;
    this.getLastest(amount);
    });
  }

  goToRecipeDetails(recipe: Recipe){
    this.router.navigate(['/recipes', recipe?.id]);
  }

  getLastest(amount: number): void {
    this.recipes = _.takeRight(this.recipes, amount);
  }

  private detectScreenSize():number {
    const width =  window.innerWidth;
    console.log(width);
    return width;
  }
}
