import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RouterModule } from '@angular/router';
import { RecipeResolve } from './recipe-resolve.service';
import { RecipesCreatorComponent } from './recipes-creator/recipes-creator.component';
import { TimesModule } from '../times/times.module';
import { MealModule } from '../meals/meal.module';
import { CuisinesModule } from '../cuisines/cuisines.module';
import { DifficultyLevelModule } from '../difficulty-level/difficulty-level.module';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesCreatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TimesModule,
    MealModule,
    CuisinesModule,
    DifficultyLevelModule
  ],
  providers:[RecipeResolve],
  exports: [RecipesListComponent]
})
export class RecipesModule { }
