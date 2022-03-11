import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
  selector: 'rl-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent  {

  @Input() recipe!: Recipe;
  @Input() switcher!: boolean;
  @Output() removedRecipe = new EventEmitter<Recipe>();
  @Output() switched = new EventEmitter<boolean>();

  switchRemove(){
    this.switched.emit(this.switcher);
  }

  removeRecipe(recipe: Recipe){
    this.removedRecipe.emit(recipe);
  }
}
