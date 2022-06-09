import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'rl-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.less']
})
export class PhotoComponent {

  @Input() recipe!: Recipe;
  @Output() shownPhoto = new EventEmitter<Recipe>();

  showPhoto(): string{
    if(!this.isPhotoEmpty()){
      return this.recipe.photo;
    }else{
      return '../../../assets/dinner.jpg';
    }
  }

  private isPhotoEmpty() {
    return this.recipe.photo.length <= 20;
  }
}
