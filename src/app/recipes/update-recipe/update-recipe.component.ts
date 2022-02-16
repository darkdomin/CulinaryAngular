import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'rl-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.less']
})
export class UpdateRecipeComponent implements OnInit {

  @Input('updateForm') recipesForm!: FormGroup;
  recipe!: Recipe;

  constructor() {
  }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipe = this.recipesForm.value;
  }
}
