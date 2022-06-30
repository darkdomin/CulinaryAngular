import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealService } from '../meals.service';
import { Meal } from '../models/meal';

@Component({
  selector: 'rl-meal-radio',
  templateUrl: './meal-radio.component.html',
  styleUrls: ['./meal-radio.component.less']
})
export class MealRadioComponent implements OnInit {

  meals!: Meal[];
  @Output() loadedMeal = new EventEmitter<number>();
  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMeals();
  }

  loadMeals(): void {
    this.mealService.getMeals().subscribe(m => {
     this.meals = m
    });
  }

  loadFilter(meal: Meal){
    console.log("posilek id - EXPORTER", meal);
    this.loadedMeal.emit(meal.id);
  }
}
