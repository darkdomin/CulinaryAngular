import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rl-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less'],
})
export class RecipeComponent  {

  @Input() recipe!: Recipe;

  showPhoto(): string{
    if(!this.isPhotoEmpty()){
      return this.recipe.photo;
    }else{
      return '../../../assets/dinner.jpg';
    }
  }


  private isPhotoEmpty() {
    return this.recipe.photo.length <= 0;
  }
  onShowPhoto(recipe: Recipe): string{
    return recipe.photo;
  }
}
