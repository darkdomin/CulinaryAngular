import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../models/recipe';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { ScreenMy } from 'src/app/screen';

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
  slide: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadRecipe();
    this.recipesForm = this.buildRecipeForm();
  }

  @HostListener('click') onClick(){
    if(this.isUpdated && this.slide == false){
      this.scrollToUp(1260);
      this.sliderSwitch();
    }
  }

  sliderSwitch(): void{
    this.slide = !this.slide;
  }

  buildRecipeForm(): FormGroup {
    return this.formBuilder.group({
      name: this.recipe.name,
      grammar: this.recipe.grammar,
      execution: this.recipe.execution,
      photo: this.recipe.photo,
      shortDescription: this.recipe.shortDescription,
      mealId: this.recipe.mealId,
      cuisineId: this.recipe.cuisineId,
      difficultId: this.recipe.difficultId,
      timeId: this.recipe.timeId,
    });
  }

  loadRecipe() {
    this.recipe = this.route.snapshot.data['recipeResolve'];
  }

   onRemoveRecipe(recipe: Recipe) {
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
      this.scrollTop();
    } else {
      this.isUpdated = true;
    }
  }
  switchRemove(){
    this.remover = !this.remover;
  }

  scrollToUp(move: number) : void{
    let height = ScreenMy.documentHeight();
    window.scrollTo(0,height - move);
  }

  scrollTop() : void{
    window.scrollTo(0,0);
  }
}
