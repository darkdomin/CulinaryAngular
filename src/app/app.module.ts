import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [RecipesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
