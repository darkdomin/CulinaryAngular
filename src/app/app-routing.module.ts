import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeMyComponent } from './recipes/home/home.component';
import { RecipesCreatorComponent } from './recipes/recipes-creator/recipes-creator.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { AuthGuard } from './_helpers';


const accountModule = () => import('./account/account.module').then((x) => x.AccountModule);
const usersModule = () => import('./users/users.module').then((x) => x.UsersModule);

const routes: Routes = [

  { path: '',
    component:
    HomeMyComponent,
    canActivate: [AuthGuard]
  },
  { path: 'users',
    loadChildren: usersModule,
    canActivate: [AuthGuard]
  },
  { path: 'account',
    loadChildren: accountModule
  },

    { path: 'home',
    component: HomeMyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    component: RecipesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipes/creator',
    component: RecipesCreatorComponent,
    canActivate: [AuthGuard],
  },

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
