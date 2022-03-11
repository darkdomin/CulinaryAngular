import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';
import { Meal } from '../../filter/meals/meal/model/Meal';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeMyComponent implements OnInit {

  recipes!: Recipe[];
  shortRecipes!: Recipe[];

  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.adjustAmountRecipes();
  }

  @HostListener("window:resize") onResize() {
    this.adjustAmountRecipes();
  }

  private adjustAmountRecipes() {
    if (this.detectScreenSize() < 1200) {
      this.loadRecipes(8);
    }
    else {
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
    console.log("ILOSC ", this.recipes);
  }

  private detectScreenSize():number {
    const width =  window.innerWidth;
    console.log(width);
    return width;
  }

}
