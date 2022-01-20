import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const recipes_routes: Routes = [
 // {path:'recipes/:id', component: RecipesDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(recipes_routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
