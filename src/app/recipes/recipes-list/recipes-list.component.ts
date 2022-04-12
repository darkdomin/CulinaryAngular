import { Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.less'],
})
export class RecipesListComponent
  extends MainRecipesComponent
  implements OnInit
{
  override recipes!: Recipe[];
  override headerText: string = 'Wszystkie przepisy';
  header: string = 'Wszystkie przepisy';
  searchText: string = '';


  page: number = 1;
  pageSize: number = 3;
  //searchPhrase: string = '';
  tableSizes: number[] = [3, 5, 10, 15];

  params: Params = this.getRequestParams( this.page, this.pageSize, this.searchText);
  constructor(
    override recipeService: RecipesService,
    override router: Router
  ) {
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
   await this.loadRecipes(this.params);
  }

  // async loadRecipes(params: Params): Promise<Recipe[]> {
  //   return new Promise((resolve) => {
  //     this.recipeService.browse(params)
  //     .subscribe((recipes) => {
  //     this.totalItem = recipes.totalItemsCount;
  //     resolve((this.recipes = recipes.items));
  //     });
  //   });
  // }

  handlePageChange(event: number): void {
    this.page = event;
    const params = this.getRequestParams( this.page, this.pageSize, this.searchText);
    this.loadRecipes(params);
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    const params = this.getRequestParams( this.page, this.pageSize, this.searchText);
    this.loadRecipes(params);
  }

  onNewText(text: string) {
    this.searchText = text;
    const params = this.getRequestParams( this.page, this.pageSize, this.searchText);
    this.loadRecipes(params);
    console.log('szukana fraza w metodzie',  text);
  }
}
