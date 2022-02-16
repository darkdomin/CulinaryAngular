import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meals.service';
import { FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'rl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less'],
})
export class MealComponent implements OnInit {
  @Input('mealForm') recipesForm!: FormGroup;
  meals!: Meal[];
  constructor(
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals;
      this.getMealName();
      this.getMealId();
      this.setForm();
    });
  }

  // pobiera wybraną nazwe z formy
  getMealName(): string {
    return this.recipesForm.get('mealId')?.value;
  }
  //pobiera Id z przypisanej nazwy
  getMealId(): number {
      return this.meals.find((e) => e.name == this.getMealName())!.id;
  }
  //Przypisuje Id do formy
  setForm() {
    this.recipesForm.patchValue({
      mealId: this.getMealId(),
    });
  }
}
