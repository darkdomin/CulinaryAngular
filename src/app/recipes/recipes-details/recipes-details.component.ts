import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../models/recipe';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rl-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.less'],
})
export class RecipesDetailsComponent implements OnInit {

  recipe!: Recipe;
  recipesForm!: FormGroup;
  isUpdated: boolean = false;
  remover: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadRecipe();
    this.recipesForm = this.buildRecipeForm();

  }

  buildRecipeForm(): FormGroup {
    return this.formBuilder.group({
      name: this.recipe.name,
      grammar: this.recipe.grammar,
      execution: this.recipe.execution,
      photo: this.recipe.photo,
      mealId: this.recipe.mealId,
      cuisineId: this.recipe.cuisineId,
      difficultId: this.recipe.difficultId,
      timeId: this.recipe.timeId,
    });
  }

  loadRecipe() {
    this.recipe = this.route.snapshot.data['recipeResolve'];
  }

  removeRecipe(recipe: Recipe) {
    this.recipesService.deleteRecipe(recipe.id).subscribe(() => {});
  }

  updateRecipe() {
    this.recipesService
      .updateRecipe(this.recipe.id, this.recipesForm.value)
      .subscribe(()=>{});

     // console.log("Aktualizacja -   "+JSON.stringify(this.recipesForm.value));
  }

  switchUpdate() {
    if (this.isUpdated) {
      this.updateRecipe();
      this.isUpdated = false;
    } else {
      this.isUpdated = true;
    }
  }

  switchRemove(){
    this.remover = !this.remover;
  }

  getFirstLetter():string{
    return this.recipe.name.charAt(0);
  }
  removeFirstLetter(): string{
    return this.recipe.name.slice(1, this.recipe.name.length);
  }
}
