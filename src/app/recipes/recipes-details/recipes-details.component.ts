import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  grammarTemp: string="";
  theChar: string = '+ ';

  @ViewChild('spr') spr: ElementRef | undefined;

  constructor(
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadRecipe();
    this.grammarTemp = this.recipe.grammar;
    this.recipe.grammar = this.addBulletPoint('\n',  this.recipe.grammar);
    this.recipesForm = this.buildRecipeForm();

  }

  // ngAfterViewInit(){
  //   this.splitText();
  // }

  @HostListener('click') async onClick() {
    if (this.isUpdated && this.slide == false) {
      if ((await ScreenMy.detectScreenSize()) < 768) {
        this.scrollToUp(0);
      } else {
        this.scrollToUp();
      }

      this.sliderSwitch();
    }
  }

  sliderSwitch(): void {
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

  switchUpdate() {
    if (this.isUpdated) {
      this.isUpdated = false;
      this.scrollTop();
    } else {
      this.isUpdated = true;
    }
  }

  switchRemove() {
    this.remover = !this.remover;
  }

  scrollToUp(move: number = 200): void {

    let height = ScreenMy.heightBetweenElements('top',"test",move);
    console.log(height)
    window.scrollTo(0, height );
  }

  scrollTop(): void {
    window.scrollTo(0, 0);
  }

  addBulletPoint(getChar: string, str: string): string {
    //let str = this.recipe.grammar;
    const iterator = str[Symbol.iterator]();
    let theChar = iterator.next();
    let line: string ="";
    let newStr: string = "";

    while (!theChar.done) {
      line = this.newLine(line, theChar);

      if (theChar.value === getChar) {
        if(!this.isUpperCase(line)){
          newStr += this.theChar + line;
         }else{
          newStr += line;
        }
        line = this.clear(line);
      }

      theChar = iterator.next();
    }
    newStr += this.theChar + line;
    return newStr;
  }

  private clear(line: string) {
    line = "";
    return line;
  }

  private newLine(line: string, theChar: IteratorYieldResult<string>) {
    line += theChar.value;
    return line;
  }

  private isUpperCase(str: string): boolean {
    return str === str.toUpperCase();//(/^[^a-z]*$/).test(str);
  }

  onIsUpdated(updated: boolean){
    this.isUpdated = updated;
  }

  onRecipesForm(recipe: Recipe){
    this.recipe = recipe;
    this.recipe.grammar = this.addBulletPoint('\n', this.recipe.grammar);
  }

  // splitText(){
  //   let p: string[] = [];
  //   const text: string = this.spr?.nativeElement.innerText;

  //   if(text !== null){
  //     console.log(text.split(/\r?\n/));
  //   }
  //   //console.log("CO jest  - ",p);
  //  return p;
  // }
}

