import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionTimeComponent } from './execution-time/execution-time.component';
import { ExecutionTimeService } from './execution-time.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeRadioComponent } from './time-radio/time-radio.component';



@NgModule({
  declarations: [
    ExecutionTimeComponent,
    TimeRadioComponent
  ],
  providers:[ExecutionTimeService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
   exports:[ExecutionTimeComponent, TimeRadioComponent]
})
export class TimesModule { }
