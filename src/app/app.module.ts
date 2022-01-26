import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { TimesModule } from './times/times.module';
import { MealModule } from './meals/meal.module';
import { CuisinesModule } from './cuisines/cuisines.module';
import { DifficultyLevelModule } from './difficulty-level/difficulty-level.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    RecipesRoutingModule,
    TimesModule,
    MealModule,
    CuisinesModule,
    DifficultyLevelModule
  ],
  providers: [RecipesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
