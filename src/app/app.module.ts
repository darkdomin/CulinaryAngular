import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';
import { RecipesRoutingModule } from './recipes/recipes-list/recipes-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    RecipesRoutingModule
  ],
  providers: [RecipesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
