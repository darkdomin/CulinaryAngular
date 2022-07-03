import { Component, OnInit } from '@angular/core';
import { DifficultyLevelService } from '../difficulty-level.service';
import { Difficulty } from '../models/difficulty';
import { FilterRadioComponent } from '../../filter-radio/filter-radio.component';

@Component({
  selector: 'rl-level-radio',
  templateUrl: './level-radio.component.html',
  styleUrls: ['./level-radio.component.less']
})
export class LevelRadioComponent extends FilterRadioComponent<Difficulty> implements OnInit {

  constructor(private levelService: DifficultyLevelService) {
    super();
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.levelService.getDifficultyLevels().subscribe(l => {
     this.filters = l
    });
  }

  createIndividualId(): number {
    return 1345;
  }

}
