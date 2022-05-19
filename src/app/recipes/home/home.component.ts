import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Recipe } from '../models/recipe';
import { ScreenMy } from '../../screen';
import { Params, Router} from '@angular/router';
import { RecipesService } from '../recipes.service';


@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})

export class HomeMyComponent extends MainRecipesComponent implements OnInit {

  params: Params = this.getRequestParams( this.page, this.pageSize, this.searchPhrase, this.isHome = true
  );

  //params: Params = this.getRequestParams( 1, 0, '');
  override recipes!: Recipe[];
  override headerText: string = "Ostatnie Przepisy";

  constructor(override recipeService: RecipesService, override router: Router) {
    super(recipeService, router);
  }

  override async ngOnInit(): Promise<void> {
    await this.adjustAmountRecipes();
  }

  @HostListener('window:resize') async onResize() {
    await this.adjustAmountRecipes();
  }

  private async adjustAmountRecipes(): Promise<Recipe[]> {
    return new Promise(async (resolve) => {
      if (await ScreenMy.detectScreenSize() < 1200) {
        (await this.loadRecipes(this.params));
        resolve(await this.getLastest(8));
      }else {
        (await this.loadRecipes(this.params));
        resolve(await this.getLastest(9));
      }
    });
  }

  async getLastest(amount: number): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipes = _.take(this.recipes, amount);
      resolve(this.recipes);
    });
  }
}
