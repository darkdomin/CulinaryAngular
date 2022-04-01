import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';



@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent extends MainRecipesComponent implements OnInit  {
  override recipes!: Recipe[];
  override headerText: string = "Wszystkie przepisy";
  header: string = "Wszystkie przepisy";
   searchText: string = "";

  constructor(override recipeService: RecipesService,
              override router: Router
              ){
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
    await this.loadRecipes2(15,1,'');
  }



  onNewText(text: string){
    this.searchText = text;
  }
};
