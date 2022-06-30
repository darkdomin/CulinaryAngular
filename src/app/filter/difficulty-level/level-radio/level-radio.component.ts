import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Difficulty } from '../models/difficulty';

@Component({
  selector: 'rl-level-radio',
  templateUrl: './level-radio.component.html',
  styleUrls: ['./level-radio.component.less']
})
export class LevelRadioComponent implements OnInit {

  levels!: Difficulty[];
  @Output() loadedLevel = new EventEmitter<number>();
  constructor(private levelService: DifficultyLevelService) {}

  ngOnInit(): void {
    this.loadLevels();
  }

  loadLevels(): void {
    this.levelService.getDifficultyLevels().subscribe(l => {
     this.levels = l
    });
  }

  loadFilter(level: Difficulty){
    console.log("posilek id - EXPORTER", level);
    this.loadedLevel.emit(level.id);
  }

}
