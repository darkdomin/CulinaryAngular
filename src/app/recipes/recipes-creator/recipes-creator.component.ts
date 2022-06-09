import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CuisinesListComponent, DifficultyLevelListComponent, ExecutionTimeComponent, MealComponent } from 'src/app/filter';
import { Recipe } from '../models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'rl-recipes-creator',
  templateUrl: './recipes-creator.component.html',
  styleUrls: ['./recipes-creator.component.less']
})
export class RecipesCreatorComponent implements OnInit, AfterViewInit {

  @ViewChild('autoFocus') autofocus!: ElementRef<HTMLInputElement>;
  @Input('creator') recipesForm!: FormGroup;
  recipe!: Recipe;


  @ViewChild('exportUpdatedNameRef') exportUpdatedNameRef!: MealComponent;
  @ViewChild('exportUpdatedTimeRef') exportUpdatedTimeRef!: ExecutionTimeComponent;
  @ViewChild('exportUpdatedCuisineRef') exportUpdatedCuisineRef!: CuisinesListComponent;
  @ViewChild('exportUpdatedLevelRef') exportUpdatedLevelRef!: DifficultyLevelListComponent;
  @Input() isUpdated: boolean = false;
  @Output() dataUpdated = new EventEmitter<boolean>();
  @Input('temp') grammarTemp!: string;
  @Output() recipesFormOut = new EventEmitter<Recipe>();
  @Input() recipeId!: number;

  isFormCreator: boolean = true;


  constructor(private formBuilder: FormBuilder,
              private recipeService: RecipesService) {
  }

  ngOnInit(): void {
    if(!this.isUpdated){
      this.recipesForm = this.buildRecipeForm();
    }else{
      this.loadRecipe();
      this.isFormCreator = !this.isFormCreator;
    }
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

  onClear(){
   this.recipesForm = this.buildRecipeForm();
 }

  execute(): void{
    alert("Dodano przepis");
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }

  loadRecipe() {
    this.setGrammar(this.grammarTemp);
    this.recipe = this.recipesForm.value;
    this.recipe.id = this.recipeId;
  }

  private setGrammar(temp: string) {
    this.recipesForm.patchValue({
      grammar: temp,
    });
  }

  updateRecipe() {
    this.recipeService
      .updateRecipe(this.recipe.id, this.recipesForm.value)
      .subscribe(() => {});
    this.isUpdated = false;
  }

  sendUpdated() {
    this.dataUpdated.emit(this.isUpdated);
  }

  exportFilter(): void {
    this.exportUpdatedNameRef.outFormGroup();
    this.exportUpdatedTimeRef.outFormGroup();
    this.exportUpdatedLevelRef.outFormGroup();
    this.exportUpdatedCuisineRef.outFormGroup();
  }

  onExportMealForm(recipe: Recipe) {
    this.recipe.mealId = recipe.mealId;
  }

  onExportCuisineForm(recipe: Recipe) {
    this.recipe.cuisineId = recipe.cuisineId;
  }

  onExportLevelForm(recipe: Recipe) {
    this.recipe.difficultId = recipe.difficultId;
  }

  onExportTimeForm(recipe: Recipe) {
    this.recipe.timeId = recipe.timeId;
    console.log("czas", recipe.timeId);
  }

  exportForm() {
    this.recipe = this.recipesForm.value;
    this.recipesFormOut.emit(this.recipe);
  }
}
