import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MealComponent } from 'src/app/filter/meals/meal/meal.component';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';
import { DifficultyLevelListComponent } from '../../filter/difficulty-level/difficulty-level-list/difficulty-level-list.component';
import { CuisinesListComponent } from 'src/app/filter/cuisines/cuisines-list/cuisines-list.component';
import { ExecutionTimeComponent } from 'src/app/filter/times/execution-time/execution-time.component';

@Component({
  selector: 'rl-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.less']
})
export class UpdateRecipeComponent implements OnInit, AfterViewInit {

  @ViewChild("exportUpdatedNameRef") exportUpdatedNameRef!: MealComponent;
  @ViewChild("exportUpdatedTimeRef") exportUpdatedTimeRef!: ExecutionTimeComponent;
  @ViewChild("exportUpdatedCuisineRef") exportUpdatedCuisineRef!: CuisinesListComponent;
  @ViewChild("exportUpdatedLevelRef") exportUpdatedLevelRef!: DifficultyLevelListComponent;
  @Input() isUpdated: boolean = true;
  @Output() dataUpdated = new EventEmitter<boolean>();
  @Input('temp') grammarTemp!: string;
  @Input('updateForm') recipesForm!: FormGroup;
  @Output() recipesFormOut = new EventEmitter<Recipe>();
  @Input() recipeId!: number;
  recipe!: Recipe;
  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;

  constructor(private recipesService: RecipesService,) {
  }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe() {
    this.setGrammar(this.grammarTemp);
    this.recipe = this.recipesForm.value;
    this.recipe.id = this.recipeId;
  }

  private setGrammar(temp: string) {
    this.recipesForm.patchValue({
      grammar: temp
    });
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }

  updateRecipe() {
    this.recipesService
      .updateRecipe(this.recipe.id, this.recipesForm.value)
      .subscribe(() => {});
      this.isUpdated = false;

  }

  sendUpdated(){
    this.dataUpdated.emit(this.isUpdated);
  }

  exportFilter(): void{
    this.exportUpdatedNameRef.outFormGroup();
    this.exportUpdatedTimeRef.outFormGroup();
    this.exportUpdatedLevelRef.outFormGroup();
    this.exportUpdatedCuisineRef.outFormGroup();
   }

  onExportMealForm(recipe: Recipe){
    this.recipe.mealId = recipe.mealId;
  }

  onExportCuisineForm(recipe: Recipe){
    this.recipe.cuisineId = recipe.cuisineId;
  }

  onExportLevelForm(recipe: Recipe){
    this.recipe.difficultId = recipe.difficultId;
  }

  onExportTimeForm(recipe: Recipe){
    this.recipe.timeId = recipe.timeId;
  }

  exportForm(){
    this.recipesFormOut.emit(this.recipe);
  }
}
