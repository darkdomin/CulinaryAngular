import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterData } from 'src/app/filter/collection';
import { FormMy } from 'src/app/form';
import { Recipe } from 'src/app/recipes/models/recipe';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Difficulty } from '../models/difficulty';

@Component({
  selector: 'rl-difficulty-level-list',
  templateUrl: './difficulty-level-list.component.html',
  styleUrls: ['./difficulty-level-list.component.less'],
})
export class DifficultyLevelListComponent implements OnInit { //extends DataSeeker<Difficulty>
  @Input('levelForm') recipesForm!: FormGroup;
  difficultiesLevel!: Difficulty[];
  @Output() exportedForm = new EventEmitter<Recipe>();

  constructor(private serviceLevel: DifficultyLevelService) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.serviceLevel.getDifficultyLevels().subscribe((levels) => {
      const level = new FilterData<Difficulty>(levels);
      this.difficultiesLevel = levels;
        const form = new FormMy(this.recipesForm);
        let resultName = form.getFieldValue('difficultId');
        let id = level.getId(resultName);
        //do przeniesienia
        this.recipesForm.patchValue({
          difficultId: id,
        });
      });
  }

  outFormGroup() {
    const level = new FilterData<Difficulty>(this.difficultiesLevel);
    const form = new FormMy(this.recipesForm);
    let recipe: Recipe = form.getValue();
    recipe.difficultId = level.getName(+recipe.difficultId);
    this.exportedForm.emit(recipe);
  }

}
