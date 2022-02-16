import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Difficulty } from '../models/difficulty';

@Component({
  selector: 'rl-difficulty-level-list',
  templateUrl: './difficulty-level-list.component.html',
  styleUrls: ['./difficulty-level-list.component.less']
})
export class DifficultyLevelListComponent implements OnInit {

  @Input('levelForm') recipesForm!: FormGroup;
  difficultiesLevel!: Difficulty[];

  constructor(private serviceLevel: DifficultyLevelService) { }

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void{
    this.serviceLevel.getDifficultyLevels().subscribe((levels)=>{
    this.difficultiesLevel = levels;
    this.getLevelName();
    this.getLevelId();
    this.setForm();
    })
  }

    // pobiera wybraną nazwe z formy
    getLevelName(): string {
      return this.recipesForm.get('difficultId')?.value;
    }
    //pobiera Id z przypisanej nazwy
    getLevelId(): number {
      return this.difficultiesLevel.find((e) => e.name == this.getLevelName())!.id;
    }
    //Przypisuje Id do formy
    setForm(){
      this.recipesForm.patchValue({
        difficultId: this.getLevelId(),
      });
    }
}
