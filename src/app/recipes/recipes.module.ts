import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedModule } from '../shared-module/index';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeResolve } from './recipe-resolve.service';
import { RecipesCreatorComponent } from './recipes-creator/recipes-creator.component';
import { TimesModule, MealModule, CuisinesModule, DifficultyLevelModule } from '../filter/index';
import { HomeMyComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NoRecipeComponent } from './no-recipe/no-recipe.component';
import { PhotoComponent } from './photo/photo.component';
import { MainRecipesComponent } from './main-recipes/main-recipes.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './recipes-list/paginator/paginator.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesCreatorComponent,
    HomeMyComponent,
    RecipeComponent,
    NoRecipeComponent,
    PhotoComponent,
    MainRecipesComponent,
    SearchEngineComponent,
    PaginatorComponent
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
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers:[RecipeResolve],
  exports: [RecipesListComponent, HomeMyComponent, NoRecipeComponent]
})
export class RecipesModule { }
