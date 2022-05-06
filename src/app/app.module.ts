import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesService } from './recipes/recipes.service';
import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './client/_helpers';
import { AlertComponent } from './client/_components/alert.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedMealService } from './filter/meals/shared-meal.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RecipesModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    RecipesRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [RecipesService,
     HttpClient,
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     SharedMealService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }













