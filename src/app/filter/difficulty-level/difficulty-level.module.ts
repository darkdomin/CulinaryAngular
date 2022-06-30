import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyLevelListComponent } from './difficulty-level-list/difficulty-level-list.component';
import { DifficultyLevelService } from './difficulty-level.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LevelRadioComponent } from './level-radio/level-radio.component';


@NgModule({
  declarations: [
    DifficultyLevelListComponent,
    LevelRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DifficultyLevelListComponent, LevelRadioComponent
  ],
  providers:[DifficultyLevelService]
})
export class DifficultyLevelModule { }
