import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataSeeker } from 'src/app/dataSeeker';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Difficulty } from '../models/difficulty';

@Component({
  selector: 'rl-difficulty-level-list',
  templateUrl: './difficulty-level-list.component.html',
  styleUrls: ['./difficulty-level-list.component.less']
})
export class DifficultyLevelListComponent extends DataSeeker implements OnInit {

  @Input('levelForm') recipesForm!: FormGroup;
  difficultiesLevel!: Difficulty[];

  constructor(private serviceLevel: DifficultyLevelService) {
    super();
  }

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void{
    this.serviceLevel.getDifficultyLevels().subscribe((levels)=>{
    this.difficultiesLevel = levels;
    let result = this.getFieldValue('difficultId', this.recipesForm);
    let id = this.getId(result);
    this.setForm(id);
    })
  }

    getId(fieldValueResult: string): number {
      return this.difficultiesLevel.find((e) => e.name == fieldValueResult)!.id;
    }

    setForm(id: number){
      this.recipesForm.patchValue({
        difficultId: id,
      });
    }
}
