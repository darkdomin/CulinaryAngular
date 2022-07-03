import { Component, OnInit} from '@angular/core';
import { MealService } from '../meals.service';
import { Meal } from '../models/meal';
import { FilterRadioComponent } from '../../filter-radio/filter-radio.component';

@Component({
  selector: 'rl-meal-radio',
  templateUrl: './meal-radio.component.html',
  styleUrls: ['./meal-radio.component.less']
})
export class MealRadioComponent extends  FilterRadioComponent<Meal>  implements OnInit  {

  constructor(private mealService: MealService) {
    super();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.mealService.getMeals().subscribe(m => {
     this.filters = m
    });
  }

  createIndividualId(): number {
    return 0;
  }
}
