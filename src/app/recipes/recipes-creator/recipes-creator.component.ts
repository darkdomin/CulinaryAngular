import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-creator',
  templateUrl: './recipes-creator.component.html',
  styleUrls: ['./recipes-creator.component.less']
})
export class RecipesCreatorComponent implements OnInit, AfterViewInit {

  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;
  recipesForm!: FormGroup;
  recipe!: Recipe;

  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipesService,
              private router: Router) {
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
      shortDescription: '',
      mealId: ['1'],
      cuisineId: ['1'],
      difficultId: ['1'],
      timeId: ['3']
    });
  }
  addRecipe() {
    this.recipeService.createRecipe(this.recipesForm.value).subscribe(() => {})
  }

  execute(): void{
    alert("Dodano przepis");
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }
}
