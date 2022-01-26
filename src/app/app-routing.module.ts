import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesCreatorComponent } from './recipes/recipes-creator/recipes-creator.component';

const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo: 'recipes'},
  {path:'recipes', component: RecipesListComponent},
  {path:'recipes/creator', component: RecipesCreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
