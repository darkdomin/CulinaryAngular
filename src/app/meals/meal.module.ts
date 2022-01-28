import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealComponent } from './meal/meal.component';
import { MealService } from './meals.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MealComponent
  ],
  providers:[MealService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[MealComponent]
})
export class MealModule { }
