import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private recipesService: RecipesService,
     private formBuilder: FormBuilder,

    private route: ActivatedRoute){}

  ngOnInit(): void {
      this.loadRecipe();
        this.recipesForm = this.buildRecipeForm();
  }

  buildRecipeForm(): FormGroup{
    return this.formBuilder.group({
      name: this.recipe.name,
      grammar: this.recipe.grammar,
      execution: this.recipe.execution,
      photo: this.recipe.photo,
      meal: this.recipe.meal,
      cuisine: this.recipe.cuisine,
      difficulty: this.recipe.difficulty,
      time: this.recipe.time
    });
  }

  loadRecipe() {
     this.recipe = this.route.snapshot.data['recipe'];
  }

  removeRecipe(recipe: Recipe){
    this.recipesService.deleteRecipe(recipe.id).subscribe(()=>{});
  }

  switchUpdate(){
    if(this.isUpdated){
      this.isUpdated = false;
    }else{
      this.isUpdated = true;
    }
  }
}
