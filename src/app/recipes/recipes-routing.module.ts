import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeResolve } from './recipe-resolve.service';


const detailsRouts: Routes = [
  {
   path: 'recipes/:id',
   component: RecipesDetailsComponent,
   resolve: {recipe: RecipeResolve}
  }
];

@NgModule({
  imports: [RouterModule.forChild(detailsRouts)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
