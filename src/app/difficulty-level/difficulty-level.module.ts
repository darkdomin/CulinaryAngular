import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DifficultyLevelListComponent } from './difficulty-level-list/difficulty-level-list.component';
import { DifficultyLevelService } from './difficulty-level.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DifficultyLevelListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    DifficultyLevelListComponent
  ],
  providers:[DifficultyLevelService]
})
export class DifficultyLevelModule { }
