import { Component, OnInit } from '@angular/core';
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
  // searchPhrase: string = '';
  // page: number = 1;
  // pageSize: number = 12;

  params: Params = this.getRequestParams(
    this.page,
    this.pageSize,
    this.searchPhrase,
    this.isHome
  );

  constructor(override recipeService: RecipesService, override router: Router) {
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
    await this.loadRecipes(this.params);
  }

  onNewText(text: string) {
    this.searchPhrase = text;
    const params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.isHome
    );
    this.loadRecipes(params);
  }

  // onhandlePageSizeChange(event: any): void {
  //   this.pageSize = event;
  //   this.page = 1;
  //   const params = this.getRequestParams(
  //     this.page,
  //     this.pageSize,
  //     this.searchPhrase
  //   );
  //   this.loadRecipes(params);
  // }

  onHandlePageChange(event: number): void {
    this.page = event;
    const params = this.getRequestParams(
      this.page,
      this.pageSize,
      this.searchPhrase,
      this.isHome
    );
    this.loadRecipes(params);
  }
}
