import { Component, OnInit } from '@angular/core';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Level } from '../models/level';

@Component({
  selector: 'rl-difficulty-level-list',
  templateUrl: './difficulty-level-list.component.html',
  styleUrls: ['./difficulty-level-list.component.less']
})
export class DifficultyLevelListComponent implements OnInit {

  difficultiesLevel!: Level[];
  constructor(private serviceLevel: DifficultyLevelService) { }

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void{
    this.serviceLevel.getDifficultyLevels().subscribe((levels)=>{
    this.difficultiesLevel = levels;
    })
  }
}
