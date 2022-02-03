import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { MealService } from '../meals.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rl-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less']
})
export class MealComponent implements OnInit {

  @Input('mealForm') recipesForm!: FormGroup;
  meals!: Meal[];
  mealForm!: FormGroup;
  constructor(private mealService: MealService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadMeals();
    this.mealForm = this.buildMealForm();
  }

  loadMeals(): void{
    this.mealService.getMeals().subscribe((meals)=>{
      this.meals = meals;
    })
  }

  buildMealForm(): FormGroup{
    return this.formBuilder.group({
      id: '',
      name: ''
    })
  }

  convertToInt(name: string){
  }
}
