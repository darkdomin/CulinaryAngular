import {
  Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meals.service';
import { FormGroup } from '@angular/forms';
import { FilterData } from 'src/app/filter/collection';
import { Recipe } from '../../../recipes/models/recipe';
import { FormMy } from 'src/app/form';

@Component({
  selector: 'rl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less'],
})
export class MealComponent implements OnInit {
  @Input('mealForm') recipesForm!: FormGroup;
  meals!: Meal[];
  @Output() exportedForm = new EventEmitter<Recipe>();

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe((meals) => {
      const meal = new FilterData<Meal>(meals);
      this.meals = meals;
      const form = new FormMy(this.recipesForm);
      let resultName = form.getFieldValue('mealId');
      let id = meal.getId(resultName);
      //do przeniesienia
      this.recipesForm.patchValue({
        mealId: id,
      });
    });
  }
  
  outFormGroup() {
    const meal = new FilterData<Meal>(this.meals);
    const form = new FormMy(this.recipesForm);
    let recipe: Recipe = form.getValue();
    recipe.mealId = meal.getName(+recipe.mealId);
    this.exportedForm.emit(recipe);
  }
}
