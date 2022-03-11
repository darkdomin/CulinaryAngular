import { Component, Input, OnInit } from '@angular/core';
import { Time } from '../model/time';
import { ExecutionTimeService } from '../execution-time.service';
import { FormGroup } from '@angular/forms';
import { DataSeeker } from 'src/app/dataSeeker';

@Component({
  selector: 'rl-execution-time',
  templateUrl: './execution-time.component.html',
  styleUrls: ['./execution-time.component.less'],
})
export class ExecutionTimeComponent extends DataSeeker implements OnInit {

  @Input('timeForm') recipesForm!: FormGroup;
  times!: Time[];

  constructor(private timeService: ExecutionTimeService) {
    super();
  }

  ngOnInit(): void {
    this.loadTimes();
  }
  loadTimes(): void {
    this.timeService.getTimes().subscribe((times) => {
      this.times = times;
      let result = this.getControlValue('timeId', this.recipesForm);
      let id = this.getId(result);
      this.setForm(id);
    });
  }

  getId(fieldValueResult: string): number {
    return this.times.find((e) => e.name == fieldValueResult)!.id;
  }

  setForm(id: number) {
    this.recipesForm.patchValue({
      timeId: id,
    });
  }
}

