import { Component, HostListener, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { RecipesListComponent } from '../recipes-list/recipes-list.component';

@Component({
  selector: 'rl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})

export class HomeMyComponent extends RecipesListComponent implements OnInit {
  override async ngOnInit(): Promise<void> {
    await this.loadRecipes();
    await this.adjustAmountRecipes();
  }

  @HostListener('window:resize') async onResize() {
    await this.adjustAmountRecipes();
  }

  private async adjustAmountRecipes() {
    return new Promise(async (resolve) => {
      if (await this.detectScreenSize() < 1200) {
        resolve(await this.getLastest(8));
      }else if(this.getRecipesLength() >= 9){
        resolve(await this.getLastest(9));
      }
       else {
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
