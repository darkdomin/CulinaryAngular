import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-creator',
  templateUrl: './recipes-creator.component.html',
  styleUrls: ['./recipes-creator.component.less']
})
export class RecipesCreatorComponent implements OnInit {

  recipesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesForm = this.buildRecipeForm();
  }

  buildRecipeForm(): FormGroup{
    return this.formBuilder.group({
     // id: '',
      name: [''],
      grammar: '',
      execution: '',
      photo: '',
      meal: '',
      cuisine: '',
      difficult: '',
      time: ''
    })
  }

  addRecipe() {
    this.recipeService.createRecipe(this.recipesForm.value).subscribe(() => {})
  }
}
