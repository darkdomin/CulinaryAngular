import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionTimeComponent } from './execution-time/execution-time.component';
import { ExecutionTimeService } from './execution-time.service';



@NgModule({
  declarations: [
    ExecutionTimeComponent
  ],
  providers:[ExecutionTimeService],
  imports: [
    CommonModule
  ],
   exports:[ExecutionTimeComponent]
})
export class TimesModule { }
