import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Meal, MealService } from 'src/app/filter';
import { ScreenMy } from 'src/app/screen';

@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent
  extends MainRecipesComponent
  implements OnInit
{
  override recipes!: Recipe[];
  override headerText: string = 'Wszystkie przepisy';
  header: string = 'Wszystkie przepisy';
  meals!: Meal[];
  expandMenu!: boolean;
  showButtonFilter!: boolean;
  showHideRecipe: boolean = true;

  params: Params = this.getRequestParams(
    this.page,
    this.pageSize,
    this.searchPhrase,
    this.meal,
    this.time,
    this.level,
    this.cuisine
  );

  constructor(override recipeService: RecipesService, override router: Router, private mealService: MealService) {
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
    this.setFiltersVisibility();
    this.loadMeals();
    await this.loadRecipes(this.params);
  }

  @HostListener('window:resize') async onResize(){
    await this.setFiltersVisibility();
  }

  public async setFiltersVisibility() {
    if ((await ScreenMy.detectScreenSize()) > 500) {
      this.showButtonFilter = false;
      this.expandMenu = true;
    } else {
      this.showButtonFilter = true;
      this.expandMenu = false;
    }
  }

  loadFilter(meal: Meal){
    this.meal = meal.id;
    console.log("posilek id ", this.meal);
  }

  onLoadMeal(meal: number){
    this.meal = meal
  }

  onLoadTime(time: number){
    this.time = time
  }

  onLoadLevel(level: number){
    this.level = level
  }

  onLoadCuisine(cuisine: number){
    this.cuisine = cuisine
  }

  load(){
    const params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.meal,
      this.time,
      this.level,
      this.cuisine
    );
    this.loadRecipes(params);
  }

  onNewText(text: string) {
    this.searchPhrase = text;
    const params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.meal,
      this.time,
      this.level,
      this.cuisine
    );
    this.loadRecipes(params);
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe(m => {
     this.meals = m
    });
  }

  // onhandlePageSizeChange(event: any): void {
  //   this.pageSize = event;
  //   this.page = 1;
  //   const params = this.getRequestParams(
  //     this.page,
  //     this.pageSize,
  //     this.searchPhrase
  //   );
  //   this.loadRecipes(params);
  // }

  onHandlePageChange(event: number): void {
    this.page = event;
    const params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.meal,
      this.time,
      this.level,
      this.cuisine
    );
    this.loadRecipes(params);
  }

}
