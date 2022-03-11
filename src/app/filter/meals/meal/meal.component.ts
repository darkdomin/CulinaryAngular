import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meals.service';
import { FormGroup } from '@angular/forms';
import { DataSeeker } from 'src/app/dataSeeker';

@Component({
  selector: 'rl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less'],
})
export class MealComponent extends DataSeeker implements OnInit   {
  @Input('mealForm') recipesForm!: FormGroup;
  meals!: Meal[];
  constructor(
    private mealService: MealService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals;
      let result = this.getControlValue('mealId', this.recipesForm);
      let id = this.getId(result);
      this.setForm(id);
    });
  }

  getId(fieldValueResult: string): number {
      return this.meals.find((e) => e.name == fieldValueResult)!.id;
  }

  setForm(id: number): void {
    this.recipesForm.patchValue({
      mealId: id,
    });
  }
}
