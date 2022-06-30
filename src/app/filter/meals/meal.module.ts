import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealComponent } from './meal/meal.component';
import { MealService } from './meals.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MealRadioComponent } from './meal-radio/meal-radio.component';



@NgModule({
  declarations: [
    MealComponent,
    MealRadioComponent
  ],
  providers:[MealService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[MealComponent, MealRadioComponent]
})
export class MealModule { }
