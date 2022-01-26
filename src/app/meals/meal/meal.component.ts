import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meals.service';

@Component({
  selector: 'rl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less']
})
export class MealComponent implements OnInit {

  meals!: Meal[];
  constructor(private mealService: MealService) { }

  ngOnInit(): void {
    this.loadMeals()
  }

  loadMeals(): void{
    this.mealService.getMeals().subscribe((meals)=>{
      this.meals = meals;
    })
  }
}
