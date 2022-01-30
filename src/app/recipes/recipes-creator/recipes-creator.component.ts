import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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
      name: ['', Validators.required],
      grammar: '',
      execution: '',
      photo: '',
      meal: ['', Validators.required],
      cuisine: ['', Validators.required],
      difficulty: ['', Validators.required],
      time: ['', Validators.required]
    });
  }
  addRecipe() {
    this.recipeService.createRecipe(this.recipesForm.value).subscribe(() => {})
  }
}
