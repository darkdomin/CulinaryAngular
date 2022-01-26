import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuisinesListComponent } from './cuisines-list/cuisines-list.component';
import { CuisinesService } from './cuisines.service';


@NgModule({
  declarations: [
    CuisinesListComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[CuisinesService],
  exports:[CuisinesListComponent]
})
export class CuisinesModule { }
