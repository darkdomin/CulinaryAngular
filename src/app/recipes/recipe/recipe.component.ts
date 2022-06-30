import { Component, Input} from '@angular/core';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'rl-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less'],
})
export class RecipeComponent  {

  @Input() recipe!: Recipe;

  onShowPhoto(recipePhoto: string): string{
    this.recipe.photo = recipePhoto;
    return this.recipe.photo
  }
}
