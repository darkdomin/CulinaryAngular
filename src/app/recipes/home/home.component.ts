import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MainRecipesComponent } from '../main-recipes/main-recipes.component';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})

export class HomeMyComponent extends MainRecipesComponent implements OnInit {
  override recipes!: Recipe[];
  override async ngOnInit(): Promise<void> {
    await this.adjustAmountRecipes();
  }

  @HostListener('window:resize') async onResize() {
    await this.adjustAmountRecipes();
  }

  private async adjustAmountRecipes() {

    return new Promise(async (resolve) => {
      if (await this.detectScreenSize() < 1200) {
        await this.loadRecipes();
        resolve(await this.getLastest(8));
      }else {
        await this.loadRecipes();
        resolve(await this.getLastest(9));
      }
    });
  }

  private async detectScreenSize(): Promise<number> {
    return new Promise((resolve) => {
     resolve(window.innerWidth);
    });
  }
}
