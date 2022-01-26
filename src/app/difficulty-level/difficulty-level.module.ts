import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyLevelListComponent } from './difficulty-level-list/difficulty-level-list.component';
import { DifficultyLevelService } from './difficulty-level.service';



@NgModule({
  declarations: [
    DifficultyLevelListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DifficultyLevelListComponent
  ],
  providers:[DifficultyLevelService]
})
export class DifficultyLevelModule { }
