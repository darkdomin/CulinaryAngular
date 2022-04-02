import { Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';
import { Recipe } from '../models/recipe';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  totalItem: number = 0;
  page: number = 1;
  pageSize: number = 3;
  searchPhrase: string = '';
  tableSizes: number[] = [3, 5, 10, 15];

  constructor(
    override recipeService: RecipesService,
    override router: Router,
    private formBuilder: FormBuilder
  ) {
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
   await this.loadRecipes2(this.searchText);
  }

  async loadRecipes2(searchPhrase: string): Promise<Recipe[]> {
    this.searchPhrase = searchPhrase;
    const params: Params = this.getRequestParams( this.page, this.pageSize, this.searchPhrase);

    console.log('szukana fraza w load',  this.searchPhrase);
    return new Promise((resolve) => {
      this.recipeService.browse(params)
      .subscribe((recipes) => {
        this.totalItem = recipes.totalItemsCount;
      resolve((this.recipes = recipes.items));
      });
    });
  }

  getRequestParams( page: number, pageSize: number, searchTitle: string,): Params {
    let params: any = {};

    if (searchTitle) {
      params[`searchPhrase`] = this.searchPhrase;
    }

    if (page) {
      params[`pageNumber`] = this.page ; //- 1
    }

    if (pageSize) {
      params[`pageSize`] = this.pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.loadRecipes2(this.searchText);
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.loadRecipes2(this.searchText);
  }

  onNewText(text: string) {
    this.searchText = text;
    this.loadRecipes2(this.searchText);
    console.log('szukana fraza w metodzie',  text);
  }
}
