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
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesCreatorComponent,
    UpdateRecipeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TimesModule,
    MealModule,
    CuisinesModule,
    DifficultyLevelModule,
    ReactiveFormsModule,
  ],
  providers:[RecipeResolve],
  exports: [RecipesListComponent, HomeComponent]
})
export class RecipesModule { }
