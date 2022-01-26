import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealComponent } from './meal/meal.component';
import { MealService } from './meals.service';



@NgModule({
  declarations: [
    MealComponent
  ],
  providers:[MealService],
  imports: [
    CommonModule
  ],
  exports:[MealComponent]
})
export class MealModule { }
