import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeMyComponent, RecipesCreatorComponent, RecipesListComponent } from './recipes/index';
import { AuthGuard } from './client/_helpers';


const accountModule = () => import('./client/account/account.module').then((x) => x.AccountModule);
const usersModule = () => import('./client/users/users.module').then((x) => x.UsersModule);

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
    path: 'creator',
    component: RecipesCreatorComponent,
    canActivate: [AuthGuard],
  }
  //{ path: '**', redirectTo: '' }
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
