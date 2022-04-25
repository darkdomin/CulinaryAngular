import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'rl-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.less']
})
export class UpdateRecipeComponent implements OnInit, AfterViewInit {

  @Input('temp') grammarTemp!: string;
  @Input('updateForm') recipesForm!: FormGroup;
  recipe!: Recipe;
  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;

  constructor() {
  }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.setGrammar(this.grammarTemp);
    this.recipe = this.recipesForm.value;
  }

  private setGrammar(temp: string) {
    this.recipesForm.patchValue({
      grammar: temp
    });
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }
}
