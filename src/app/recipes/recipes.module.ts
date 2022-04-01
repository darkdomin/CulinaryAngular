import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RouterModule } from '@angular/router';
import { RecipeResolve } from './recipe-resolve.service';
import { RecipesCreatorComponent } from './recipes-creator/recipes-creator.component';
import { TimesModule } from '../filter/times/times.module';
import { MealModule } from '../filter/meals/meal.module';
import { CuisinesModule } from '../filter/cuisines/cuisines.module';
import { DifficultyLevelModule } from '../filter/difficulty-level/difficulty-level.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { HomeMyComponent } from './home/home.component';
import { AlertComponent } from './recipes-details/alert/alert.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { NoRecipeComponent } from '../no-recipe/no-recipe.component';
import { PhotoComponent } from './photo/photo.component';
import { MainRecipesComponent } from './main-recipes/main-recipes.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';


@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesCreatorComponent,
    UpdateRecipeComponent,
    HomeMyComponent,
    AlertComponent,
    RecipeComponent,
    HeaderBodyComponent,
    NoRecipeComponent,
    PhotoComponent,
    MainRecipesComponent,
    SearchEngineComponent
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
  exports: [RecipesListComponent, HomeMyComponent, HeaderBodyComponent, NoRecipeComponent]
})
export class RecipesModule { }
