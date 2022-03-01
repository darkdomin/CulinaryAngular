import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecutionTimeComponent } from './execution-time/execution-time.component';
import { ExecutionTimeService } from './execution-time.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExecutionTimeComponent
  ],
  providers:[ExecutionTimeService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
   exports:[ExecutionTimeComponent]
})
export class TimesModule { }
