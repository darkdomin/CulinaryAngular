import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Level } from '../models/level';

@Component({
  selector: 'rl-difficulty-level-list',
  templateUrl: './difficulty-level-list.component.html',
  styleUrls: ['./difficulty-level-list.component.less']
})
export class DifficultyLevelListComponent implements OnInit {

  @Input() recipesForm!: FormGroup;
  difficultiesLevel!: Level[];
  levelForm!: FormGroup;

  constructor(private serviceLevel: DifficultyLevelService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadLevels();
    this.levelForm = this.buildMealForm();
  }

  loadLevels(): void{
    this.serviceLevel.getDifficultyLevels().subscribe((levels)=>{
    this.difficultiesLevel = levels;
    })
  }

  buildMealForm(): FormGroup{
    return this.formBuilder.group({
      id: '',
      name: ''
    })
  }
}
