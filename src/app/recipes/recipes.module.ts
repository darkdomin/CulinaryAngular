import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedModule } from '../shared-module/shared.module';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RouterModule } from '@angular/router';
import { RecipeResolve } from './recipe-resolve.service';



@NgModule({
  declarations: [
    RecipesListComponent,
    RecipesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers:[RecipeResolve],
  exports: [RecipesListComponent]
})
export class RecipesModule { }
