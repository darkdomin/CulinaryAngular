import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Recipe } from '../models/recipe';
import { ScreenMy } from '../../screen';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})

export class HomeMyComponent extends MainRecipesComponent implements OnInit {
  override recipes!: Recipe[];
  override headerText: string = "Ostatnie Przepisy";

  override async ngOnInit(): Promise<void> {
    await this.adjustAmountRecipes();
  }

  async getRecipesLength(): Promise<number> {
    return new Promise((resolve) => {
      resolve(this.recipes?.length);
    });
  }

  async getLastest(amount: number): Promise<Recipe[]> {
    return new Promise((resolve) => {
      this.recipes = _.takeRight(this.recipes, amount);
      resolve(this.recipes);
    });
  }

  @HostListener('window:resize') async onResize() {
    await this.adjustAmountRecipes();
  }

  private async adjustAmountRecipes() {
    return new Promise(async (resolve) => {
      if (await ScreenMy.detectScreenSize() < 1200) {
        await this.loadRecipes2(15,1,'');
        resolve(await this.getLastest(8));
      }else {
        await this.loadRecipes2(15,1,'');
        resolve(await this.getLastest(9));
      }
    });
  }
}
