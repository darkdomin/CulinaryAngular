import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'rl-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.less']
})
export class UpdateRecipeComponent implements OnInit, AfterViewInit {

  @Input('updateForm') recipesForm!: FormGroup;
  recipe!: Recipe;
  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.recipe = this.recipesForm.value;
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }
}
