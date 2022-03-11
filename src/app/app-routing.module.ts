import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesCreatorComponent } from './recipes/recipes-creator/recipes-creator.component';
import { HomeMyComponent } from './recipes/home/home.component';


const routes: Routes = [
  {path:'',pathMatch: 'full',redirectTo: 'home'},
  {path:'home', component: HomeMyComponent},
  {path:'recipes', component: RecipesListComponent},
  {path:'recipes/creator', component: RecipesCreatorComponent}

];
const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};




@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
