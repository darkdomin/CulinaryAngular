import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuisinesListComponent } from './cuisines-list/cuisines-list.component';
import { CuisinesService } from './cuisines.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CuisineRadioComponent } from './cuisine-radio/cuisine-radio.component';


@NgModule({
  declarations: [
    CuisinesListComponent,
    CuisineRadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[CuisinesService],
  exports:[CuisinesListComponent, CuisineRadioComponent]
})
export class CuisinesModule { }
